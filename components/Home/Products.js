import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Product from './Product';
import { useQuery } from 'react-query';
import Loader from '../Loader/Loader';
import useProducts from '../../hooks/useProducts';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Rating from './Rating';

const Products = () => {

    // let data = useProducts();

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    // let {data, isLoading, refetch} = useQuery('products', ()=> fetch('https://food-court-xi.vercel.app/api/product').then(res => res.json()))

    // if(isLoading) {
    //     return <Loader> </Loader>
    // }

    // let products = data.products

    // console.log(data);

    // setProducts(data.products);

    useEffect(() => {
        setLoading(true)
        fetch('https://food-court-xi.vercel.app/api/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                {/* <div className="main__products grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-10">
                    {
                        products.map(product => <div key={product._id} className="product__item">
                            <div className="w-full p-4">
                                <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                    <div className="relative pb-48 overflow-hidden">
                                        <Image src={`/assets/08.png`} layout='fill' alt='pro' />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <h2 className="mt-2 mb-2  font-bold">{product.title}</h2>

                                            {
                                                status ? <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Available</span> : <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-red-800 rounded-full font-semibold uppercase tracking-wide text-xs">Not Available</span>
                                            }

                                        </div>

                                        <p className="text-sm">{product.desc}</p>
                                        <div className="ratings flex items-center my-4">
                                            <h2>Rating: </h2>
                                            <div className='flex items-center ml-5'>
                                                <Rating rating={product.rating} ></Rating>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <span className="font-bold text-xl">{product.price}</span>&nbsp;<span className="text-sm font-semibold">BDT</span>
                                            </div> */}
                {/* <div>
                                <button onClick={() => addToCart(_id)} className="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                            </div> */}
                {/* <div>
                                                <button onClick={() => router.push({
                                                    pathname: '/singleproduct/[pid]',
                                                    query: { pid: product._id },
                                                })} className="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                                            </div> */}
                {/* <div>
                                <button onClick={() => router.push(`singleproduct/${_id}`)} className="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                            </div> */}
                {/* </div>
                                    </div>
                                </a>
                            </div>
                        </div>)
                    }
                </div> */}

                <div className='flex justify-center mt-10'>
                    <Link href='/menu'><button className='btn px-10 text-white'>See all foods</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Products;