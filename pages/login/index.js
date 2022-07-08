import React from 'react'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'


function Index() {
  const router = useRouter()
  const handleLogin = e => {
    e.preventDefault();


    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) {
      toast.error("Email is required")
      return;
    }
    if (!password) {
      toast.error("Password is required")
      return;
    }



    fetch(`http://localhost:3000/api/users?email=${email}&password=${password}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast.success("Login successful");
          localStorage.setItem('email', email);
          router.push('/')
        } else {
          toast.error("Email or password is wrong")
        }
      })

  }

  return (
    <>
      <Navbar> </Navbar>

      <div className=' font-serif flex  h-screen justify-center items-center bg-accent'>

        <div className="card  m-5 bg-white shadow-xl">
          <div className="card-body">
            <h2 className=" text-xl ">Welcome to Food Court Please login.</h2>

            <form onSubmit={handleLogin}>
              <p>Email</p>
              <input type="email" name="email" placeholder="Your Email" className="mb-4 input bg-slate-200 input-sm input-bordered w-full max-w-xs" />
              <p>Password</p>
              <input type="password" name="password" placeholder="Password" className="mb-4 input bg-slate-200 input-sm input-bordered w-full max-w-xs" />

              <input className='mt-4 btn btn-sm w-full text-black font-bold bg-primary max-w-xs mb-5' type="submit" value="Login" />
              <p className=''>Forgotten password? <button className="text-red-500">Reset Password</button></p>
            </form>

            <p className=''>New to Food Court? <Link href='/signup' ><span className='text-neutral cursor-pointer'>Create your account</span></Link></p>

          </div>

        </div>

      </div>
      <Footer> </Footer>
    </>
  )
}



export default Index