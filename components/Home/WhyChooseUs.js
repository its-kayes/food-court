import React from 'react'
import styles from '../../styles/WhyChoose.module.css'
import Link from 'next/link'



export const WhyChooseUs = () => {
    return (
        <div className=" grid-container md:grid grid-cols-12 pt-16">
                <div className="header1 col-span-6 p-9">
                    <h2 className='text-2xl pb-6'><span className={styles.header1}>Why choose us</span></h2>
                    <h2 className='font-bold text-4xl pb-5'><span className={styles.header2}>We Have Excellent Of Quality <br /> Japanese Food</span></h2>
                    <p>A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .</p>
                    <div className="p-14">
                    <Link href='/menu'><button className="btn btn-lg btn-warning rounded-full p-4"><span className={styles.btn}>Check Our Menu</span></button></Link>
                    </div>
                </div>
                <div className="item2 col-span-6">
                    <img src="https://i.ibb.co/g6xB5zj/1-003.png" alt="image" />
                </div>
            </div>
    )
}