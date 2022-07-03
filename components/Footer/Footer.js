import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 grid gap-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
        <div className=''>
          <h2 className='text-white text-4xl'>FOOD COURT</h2>
          <div className='flex gap-5 mt-3 px-5'>
            <div className='text-2xl text-white'><AiFillFacebook /></div>
            <div className='text-2xl text-white'><AiFillInstagram /></div>
            <div className='text-2xl text-white'><AiFillTwitterCircle /></div>
            <div className='text-2xl text-white'><AiFillLinkedin /></div>
          </div>
        </div>
        <div className='lg:mt-0 md:mt-0 sm: mt-10'>
          <span className="footer-title text-white">Services</span>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </div>
        <div className='lg:mt-0 md:mt-0 sm: mt-10'>
          <span className="footer-title text-white">Company</span>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </div>
        <div className='lg:mt-0 md:mt-0 sm: mt-10'> 
          <span className="footer-title text-white">Legal</span>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </div>
      </footer>
    </div>
  )
}
