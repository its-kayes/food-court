import React from 'react';
import Image from "next/image";
import { itemImg, image } from '../../styles/menulist.module.css';

import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import useProducts from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader';
import { useQuery } from 'react-query';

const Index = () => {

    let { data, isLoading, refetch } = useQuery('products', () => fetch('https://food-court-d87gj4rlj-its-kayes.vercel.app/api/product').then(res => res.json()))

    if (isLoading) {
        return <Loader> </Loader>
    }
    let products = data.products;


    return (
        <>
            <Navbar > </Navbar>
            <div className={image}>
                <p className='text-3xl  text-center awesome-title text-red-600 pt-5'>Our signature</p>
                <h1 className='text-5xl text-center font-semibold my-4'>Food Court Main Dishes</h1>
                <p className='text-lg text-center my-2 text-gray-400'>Amet amet parturient sed posuere vulputate pharetra a sapien,</p>
                <p className='text-lg text-center my-2 text-gray-400'>habitant. Enim vel elit pharetra.</p>

                <div className="grid grid-cols-2 ">
                    {
                        products.map(item =>


                            <div key={item._id} className="card card-side">

                                <figure><img className={itemImg} src={item.img} alt="aa"  ></img></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl font-medium ">{item.name}</h2>
                                    <p className='text-lg text-center my-2 text-gray-400'>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened.</p>
                                    <p className="text-center text-xl font-semibold">${item.price}</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary font-bold">ADD TO CART</button>
                                    </div>
                                </div>

                            </div>


                        )
                    }
                </div>
            </div>
            <Footer> </Footer>
        </>
    );

};

export default Index;