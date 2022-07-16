import React, { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import Description from './Description';
import Information from './Information';
import Review from './Review';
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';
import Loader from '../../components/Loader/Loader';
import useUser from '../../hooks/useUser';


const SingleProduct = () => {

    const router = useRouter()
    const id = router.query;
    let _id = id.id;


    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState(true);
    const [information, setInformation] = useState(false);
    const [reviews, setReviews] = useState(false);
    let [size, setSize] = useState(0);
    // let { user } = useUser();
    let user = useUser();

    // let [totalPrice, setTotalPrice] = useState(0);

    // console.log('des', description, 'inf', information, 'rev', reviews)
    console.log(user);


    let { data, isLoading, refetch } = useQuery('singleproduct', () => fetch(`http://localhost:3000/api/singleproduct?id=${id.id}`).then(res => res.json()))

    // if(!_id) {
    //     return <Loader> </Loader>
    // }

    if (isLoading) {
        return <Loader> </Loader>
    }

    if (!data) {
        return refetch();
    }

    // setTotalPrice(product?.price);

    // if (product?.products === true) {

    // }
    // let item = product.products;

    let product = data?.products;

    // console.log(totalPrice);
    // console.log(product?.products.title);
    // console.log(item);


    let addToCart = (name, img, quantity, price) => {
        // event.preventDefault();

        let data = {
            totalPrice: (quantity * price),
            email: user.email,
            quantity: quantity,
            name: name,
            img: img,
            size: 10
        }
        console.log(data);


        fetch("http://localhost:3000/api/orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));

    }


    return (
        <>
            <Navbar> </Navbar>
            <div className='min-h-screen mt-12 mb-8'>
                <div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 '>
                        <div className='h-[1000px] bg-[#faf7f2] mr-6 static'>
                            <div className='w-3/4 mt-12 mx-auto '>
                                <img src="https://themefie.com/html/foodka/assets/img/shop/single-1.png" alt="" />
                            </div>
                            <div className='sm:flex justify-around w-2/4 mt-8 mx-auto'>
                                <img src="https://themefie.com/html/foodka/assets/img/shop/2.png" alt="" />
                                <img src="https://themefie.com/html/foodka/assets/img/shop/3.png" alt="" />
                                <img src="https://themefie.com/html/foodka/assets/img/shop/1.png" alt="" />
                            </div>
                        </div>
                        <div className='lg:w-3/4 scroll-my-80'>
                            {/* <h1 className='text-5xl'>Maxican Pizza Test Better</h1> */}
                            <h1 className='text-5xl'>{product?.title}</h1>
                            <div className='flex justify-between items-center'>
                                <p className='text-2xl font-bold'>${product?.price}</p>
                                {/* <p className='text-2xl font-bold'>${data.price[size]}</p> */}

                                <div className='flex items-center my-12'>
                                    <p className='flex items-center'><span>{product?.rating}</span> <FaStar className='text-[#d80027]' /></p>
                                    <FaStar className='text-[#d80027]' /><FaStar className='text-[#d80027]' />
                                    <p> <FaStarHalf className='text-[#d80027]' /></p>
                                </div>
                            </div>
                            {/* <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</p> */}
                            <p> {product?.desc} </p>

                            <div className='grid grid-cols-2 mt-8'>
                                <div>
                                    <p className='text-2xl font-semibold mb-6'>Select Size</p>
                                    <div className='grid lg:w-3/4 grid-cols-1 gap-4 md:grid-cols-3'>
                                        <button onClick={() => setSize(0)} className="btn btn-circle bg-[#faf7f2] border-0 text-red-600 hover:bg-red-500 hover:text-white font-bold">
                                            10
                                        </button>
                                        <button onClick={() => setSize(1)} className="btn btn-circle bg-[#faf7f2] border-0 text-red-600 hover:bg-red-500 hover:text-white font-bold">
                                            12
                                        </button>
                                        <button onClick={() => setSize(2)} className="btn btn-circle bg-[#faf7f2] border-0 text-red-600 hover:bg-red-500 hover:text-white font-bold">
                                            14
                                        </button>
                                    </div>
                                </div>
                                {/* <div>
                                    <p className='text-2xl  font-semibold'> Select Crust</p>
                                    <select className="border-0 focus:border-0  bg-[#faf7f2] mt-6 select select-bordered w-full max-w-xs">
                                        <option disabled selected>-Choose Your Size-</option>
                                        <option>Pizza</option>
                                        <option>Burger</option>
                                        <option>Ramen</option>
                                    </select>
                                </div> */}
                                <div>
                                    <p className='text-2xl  font-semibold'> Total Cost</p>
                                    <input type="number" name="totalPrice" id="" value={quantity * product?.price} className="border-0 rounded-full focus:border-0 bg-[#faf7f2] mt-6 h-10 select-bordered w-2/4 font-bold text-red-600 text-center max-w-xs" />
                                </div>
                            </div>

                            <div className='flex items-center mt-12 '>
                                <div className='w-2/4 flex   items-center  '>
                                    <button onClick={() => {
                                        if (quantity >= 2) {
                                            setQuantity(quantity - 1)
                                        }
                                    }} className='p-3 bg-[#faf7f2] font-bold'>-</button>
                                    <input value={quantity} className=' font-bold w-1/4 text-center p-3 bg-[#faf7f2]' type="number" name="quantity" id="" />
                                    <button onClick={() => setQuantity(quantity + 1)} className='p-3 bg-[#faf7f2] font-bold'>+</button>
                                </div>
                                <button onClick={() => addToCart(product?.title, product?.img, quantity, product?.price)} className="btn btn-warning  p-1 font-bold w-[200px]">ADD TO CART</button>
                            </div>
                            {/* <p> Total Price:- { quantity * product?.price } </p> */}

                            <hr className='my-6' />
                            <div className='text-gray-400'>
                                <span className=''>SKU: PZ2866</span> <span className='mx-12'>Categories: Pizza</span> <span>Tags: Boscaiola,Pizza</span>
                            </div>
                            <div>
                                <div className={`flex items-center mt-28 `}>
                                    <h1 onClick={() => {
                                        setInformation(false)
                                        setReviews(false)
                                        setDescription(true)
                                    }} className={`text-xl cursor-pointer font-semibold ${description && 'text-red-500'}`}>Description</h1>
                                    <h1 onClick={() => {
                                        setReviews(false)
                                        setDescription(false)
                                        setInformation(true)
                                    }} className={`text-xl ml-8 cursor-pointer font-semibold ${information && 'text-red-500'}`}>Additional information</h1>
                                    <h1 onClick={() => {
                                        setDescription(false)
                                        setInformation(false)
                                        setReviews(true)
                                    }} className={`text-xl ml-8 cursor-pointer font-semibold ${reviews && 'text-red-500'}`}>Reviews (1)</h1>
                                </div>
                            </div>
                            <div className='duration-1000'>
                                {
                                    description && <Description />
                                }
                                {
                                    information && <Information />
                                }
                                {
                                    reviews && <Review />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer> </Footer>
        </>
    );
};

export default SingleProduct;