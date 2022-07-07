import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Product from './Product';

const Products = () => {

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
        <div className='px-10'>
            <div className="products__header text-center">
                <h1 className='text-3xl text-red-500 mb-2 awesome-title'>Our Products</h1>
                <h1 className='text-4xl font-semibold'>Delicious foods for delicious meal</h1>
            </div>

            <div className="products mt-10">
                <div className="products__category">
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
                        products.slice(0, 4).map(product => <Product
                            product={product}
                            key={product._id}
                        />)
                    }
                </div>

                <div className='flex justify-center mt-10'>
                    <Link href='/menu'><button className='btn px-10 text-white'>See all foods</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Products;