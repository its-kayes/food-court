import React from 'react'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                        <div className='flex justify-center items-center'>
                            <img src="https://i.ibb.co/r47stft/shopping-cart.png" alt="img" />
                            <p className='ml-3'>45.67 $</p>
                        </div>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><span className='font-bold uppercase'>Food </span><span className='font-bold uppercase text-orange-400'> Court</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Item 1</a></li>
                    <li tabIndex="0">
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                    <div className="w-full justify-evenly navbar-center hidden lg:flex" tabIndex='0'>
                        {/* <div className="indicator">
                            <span className="indicator-item badge badge-secondary">99+</span>
                            <img className='w-10 h-10' src="https://i.ibb.co/r47stft/shopping-cart.png" alt="img" />
                        </div> */}
                        <div className='flex justify-center items-center'>
                            <img src="https://i.ibb.co/r47stft/shopping-cart.png" alt="img" />
                            <p className='ml-3'>45.67 $</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="https://i.ibb.co/XJ25pnr/phone.png" alt="img" />
                            <p className='ml-4'>45.67 $</p>
                        </div>
                    </div>
                </ul>
            </div>
            {/* <div className="w-1/2 justify-center navbar-center hidden lg:flex" tabIndex='0'>
                <div className='flex w-1/2 justify-center items-center'>
                    <img src="https://i.ibb.co/r47stft/shopping-cart.png" alt="img" />
                    <p className='ml-3'>45.67 $</p>
                </div>
                <div className='flex w-1/2 justify-center items-center'>
                    <img src="https://i.ibb.co/XJ25pnr/phone.png" alt="img" />
                    <p>45.67 $</p>
                </div>
            </div> */}
        </div>
    )
}
