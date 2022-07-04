import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className="navbar lg:pl-40 py-10 bg-[#FAF7F2] bg-opacity-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'><p className='font-semibold'>HOME</p></Link></li>
                        <li><Link href='/menu'><p className='font-semibold'>FOODS</p></Link></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                PAGES
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a className='font-semibold'>Blog</a></li>
                                <li><a className='font-semibold'>Menu</a></li>
                                <li><a className='font-semibold'>Menu List</a></li>
                                <li><a className='font-semibold'>Shop</a></li>
                            </ul>
                        </li>
                        <li><a>ABOUT US</a></li>
                        <div className='flex justify-center items-center'>
                            <img src="https://i.ibb.co/r47stft/shopping-cart.png" alt="img" />
                            <p className='ml-3'>45.67 $</p>
                        </div>
                    </ul>
                </div>
                <a className="text-2xl"><span className='font-bold uppercase'>Food</span><span className='font-bold uppercase text-orange-400'>Court</span></a>
                <div className='hidden lg:flex ml-8'>
                    <ul className="menu menu-horizontal p-0">
                        <li><Link href='/'><p className='font-semibold'>HOME</p></Link></li>
                        <li><Link href='/menu'><p className='font-semibold'>FOODS</p></Link></li>
                        <li tabIndex="0">
                            <a className='font-semibold'>
                                PAGES
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-slate-200">
                                <li><a className='font-semibold'>Blog</a></li>
                                <li><a className='font-semibold'>Menu</a></li>
                                <li><a className='font-semibold'>Menu List</a></li>
                                <li><a className='font-semibold'>Shop</a></li>
                            </ul>
                        </li>
                        <li><a className='font-semibold'>ABOUT US</a></li>
                        <li><a className='font-semibold'>CONTACTS</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-1/2 justify-evenly hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <div className='flex justify-between items-center'>
                        <img src="https://i.ibb.co/r47stft/shopping-cart.png" alt="img" />
                        <p className='ml-3 font-semibold'>45.67 $</p>
                    </div>
                    <div className='flex justify-center items-center ml-6'>
                        <img src="https://i.ibb.co/XJ25pnr/phone.png" alt="img" />
                        <p className='ml-4 font-semibold'>+99 097452715</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}
