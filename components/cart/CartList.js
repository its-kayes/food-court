import React, { useState } from 'react'
import Image from 'next/image';
import { ImCross } from 'react-icons/im';
import { useQuery } from 'react-query'
import Loader from '../Loader/Loader';
import useUser from '../../hooks/useUser';

export const CartList = () => {
    let user = useUser();

    // let emailx ;
    // if (typeof window !== 'undefined') {
    //     // Perform localStorage action
    //     emailx = localStorage.getItem('email')
    // }

    let [inTotal, setInTotal] = useState(0);

    let { data, isLoading, refetch } = useQuery("orders", () =>
        fetch(`http://localhost:3000/api/orders?email=${user.email}`).then((res) => res.json())
    );
    // let { data, isLoading, refetch } = useQuery("orders", () =>
    //     fetch(`http://localhost:3000/api/orders?email=${emailx}`).then((res) => res.json())
    // );



    if (isLoading) {
        return <Loader> </Loader>
    }

    if (!data) {
        return refetch();
    }
    console.log(user);
    console.log(data);
    let totalOrder = data.Orders;

    

    let price = totalOrder.map(p => p.totalPrice);
    let sum = 0;

    for (let i = 0; i < price.length; i++) {
        sum += price[i];
    }
    // console.log(sum);


    let couponValue = event => {
        event.preventDefault();
        let couponValue = event.target.coupon.value;
        if (couponValue === 'Phero') {
            let discountPrice = sum - (sum / 10);
            setInTotal(discountPrice)
            console.log(inTotal)
        }
    }

    return (

        <div className='mt-24 mx-5 lg:mx-24 '>
            <div className="overflow-x-auto">
                <table className="table w-full text-xl">
                    <thead>
                        <tr>
                            <th className='bg-[#F6F1E7] decoration-none'></th>
                            <th className='bg-[#F6F1E7] dec text-lg'>Image</th>
                            <th className='bg-[#F6F1E7] text-lg'>Products</th>
                            <th className='bg-[#F6F1E7] text-lg'>Quantity</th>
                            <th className='bg-[#F6F1E7] text-lg'>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            totalOrder.map(order => <tr key={order._id}>
                                <td> <ImCross /> </td>
                                <td>
                                    <Image height={`100`} width={`100`} src={`https://themefie.com/html/foodka/assets/img/widget/01.png`} alt="img" />
                                    {/* <Image height={`100`} width={`100`} src={order.img} alt="img" /> */}
                                </td>
                                <td>
                                    <div>
                                        <h5 className='font-semibold'>{order.name}</h5>
                                        <ul>
                                            <li><span>Select Size: {
                                                order.size === 10
                                                    ?
                                                    "Small"
                                                    :
                                                    "Big"
                                            } </span>Large</li>
                                            <li><span>Select Crust: </span>Double Crust</li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="p-4 px-6 whitespace-nowrap">
                                    <div>
                                        {/* <button className="px-2 py-0 shadow">-</button> */}
                                        <input
                                            disabled
                                            type="text"
                                            name="qty"
                                            defaultValue={order.quantity}
                                            className="w-12 text-center bg-gray-100 outline-none"
                                        />
                                        {/* <button className="px-2 py-0 shadow">+</button> */}
                                    </div>
                                </td>
                                <td>$ {order.totalPrice} </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div className="my-5 flex flex-col lg:flex-row justify-around pb-10">



                <form onSubmit={couponValue} className='flex flex-col lg:flex-row gap-3 my-5 w-full'>
                    <input name='coupon' type="text" placeholder="Coupon Code" className="input w-full lg:w-4/6  h-[56px]" />
                    <button type='submit' className="btn border-none w-auto font-bold text-lg bg-[#FDCE29] hover:bg-[#FDCE29] h-[56px] rounded-md">APPLY COUPON</button>
                </form>
                <div className='w-full flex lg:justify-end  lg:px-5 my-5'>
                    <button className="btn border-none w-full lg:w-1/2 font-bold text-lg bg-[#CC2829] hover:bg-[#CC2829] text-white h-[56px] rounded-md">Get one </button>
                </div>
                <div className='bg-white rounded-lg w-full my-5'>
                    <div className="p-5">
                        <h5 className='text-xl font-semibold mb-4'>Cart totals</h5>
                        <ul className='text-lg font-semibold'>
                            <li className='my-2'>Subtotal<span className='float-right'>${sum}</span></li>
                            {
                                inTotal ?
                                    <li className="text-[#CC2829] my-2">Total<span className='float-right'>${inTotal} </span></li>
                                    :
                                    <li className="text-[#CC2829] my-2">Total<span className='float-right'>${sum} </span></li>
                            }

                        </ul>
                    </div>
                    <button className="btn border-none font-bold text-lg bg-[#FDCE29] rounded-t-none w-full overflow-hidden hover:bg-[#FDCE29] h-[56px] ">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
