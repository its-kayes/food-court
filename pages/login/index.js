import React from 'react'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'

function index() {
  return (
    <>
      <Navbar> </Navbar>

      <div className=' font-serif flex  h-screen justify-center items-center bg-accent'>

        <div className="card  m-5 bg-white shadow-xl">
          <div className="card-body">
            <h2 className=" text-xl ">Welcome to Food Court Please login.</h2>

            <form>
              <p>Email</p>
              <input type="email" placeholder="Your Email" className="mb-4 input bg-slate-200 input-sm input-bordered w-full max-w-xs" />
              <p>Password</p>

              <input type="password" placeholder="Password" className="mb-4 input bg-slate-200 input-sm input-bordered w-full max-w-xs" />

              <input className='mt-4 btn btn-sm w-full text-black font-bold bg-primary max-w-xs mb-5' type="submit" value="Login" />
              <p className=''>Forgotten password? <button className="text-red-500">Reset Password</button></p>
            </form>

            <p className=''>New to Food Court? <a className='text-neutral'>Create your account</a></p>

          </div>

        </div>

      </div>
      <Footer> </Footer>
    </>
  )
}



export default index