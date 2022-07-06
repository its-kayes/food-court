import React from 'react'
import Link from 'next/link'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'

function index() {
    return (
        <>
            <Navbar> </Navbar>
            <div className=' flex h-screen justify-center font-serif items-center bg-accent'>
                <div className="card w-96 bg-white m-5 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl">Create your Food Court account</h2>

                        <form>

                            <span>Name</span>
                            <input type="text" placeholder="Your Name" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

                            <span>Email</span>

                            <input type="email" placeholder="Your Email" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

                            <span>Password</span>

                            <input type="password" placeholder="Password" className="mb-4 input input-sm input-bordered w-full max-w-xs" />

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

export default index