import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import Product from '../../components/Home/Product';

const Index = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/api/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p className='text-center'>Products Loading...</p>
    if (!products) return <p>No profile data</p>

    return (
        <>
            <Navbar> </Navbar>

            {/* breadcrumb */}
            <div className="flex items-center justify-around lg:justify-between bg-[#CC2829] relative bg-[url('https://themefie.com/html/foodka/assets/img/banner/bg-img-2.png')] bg-no-repeat bg-cover bg-center ">
                <div>
                    <Image height={300} width={300} src="https://themefie.com/html/foodka/assets/img/banner/shape-1.png" />
                </div>
                <div className='w-full my-16 absolute'>
                    <div className="banner-inner text-center">
                        <h3 className='awesome-title  text-2xl lg:text-4xl m-4 text-[#FDC913]'>Foods Page</h3>
                        <h1 className='uppercase text-4xl leading-[64px] lg:text-6xl font-bold m-4 text-white'>Check your box </h1>
                        <div className="text-sm  breadcrumbs flex justify-center">
                            <ul>
                                <li className='text-white'>Home</li>
                                <li className='text-[#FDC913]'>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <Image height={300} width={300} src="https://themefie.com/html/foodka/assets/img/banner/shape-2.png" />
                </div>
            </div>

            {/* foods */}
            <div className="products mt-10 px-10 my-10">
                <div className="products__category mb-10">
                    <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider active__category border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="main__products grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-10">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                        />)
                    }
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Index;

