import React, { useState } from 'react'
import Link from 'next/link'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'


function Index() {
    const router = useRouter()
    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const img = e.target.image.value;

        if (!name) {
            toast.error("Name is required")
            return;
        }
        if (!email) {
            toast.error("Email is required")
            return;
        }
        if (!password) {
            toast.error("Password is required")
            return;
        }
        if (!img) {
            toast.error("Image is required")
            return;
        }

        // var file = document.getElementById('image');
        // const image = file.files[0];

        const newUser = {
            name: name,
            email: email,
            password: password,
            img: img,
        }

        const toastify = toast.loading("Please wait...")

        fetch('https://food-court-xi.vercel.app/api/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.update(toastify, { render: "Registration successful", type: "success", isLoading: false });
                    router.push('/login')
                } else {
                    toast.update(toastify, { render: "Registration Failed", type: "error", isLoading: false });
                }
                setTimeout(() => {
                    toast.dismiss(toastify)
                }, 2000)
            })

    }
    return (
        <>
            <Navbar> </Navbar>
            <div className=' flex h-screen justify-center font-serif items-center bg-accent'>
                <div className="card w-96 bg-white m-5 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl">Create your Food Court account</h2>
                        <form onSubmit={handleRegister}>

                            <span>Name</span>
                            <input type="text" name="name" placeholder="Your Name" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

                            <span>Email</span>

                            <input type="email" name="email" placeholder="Your Email" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

                            <span>Password</span>

                            <input type="password" name="password" placeholder="Password" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

                            <span>Image</span>

                            <input type="text" name="image" id="image" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

                            <input className='btn btn-sm w-full text-black font-bold bg-primary max-w-xs mt-4' type="submit" value="SignUp" />
                        </form>
                        <p>Already have an account? <Link href='/login' ><span className='text-neutral cursor-pointer'>Please Login</span></Link></p>

                    </div>
                </div>
            </div>
            <Footer> </Footer>
        </>
    )
}

export default Index