import React, { useState } from 'react'
import Image from 'next/image';
import { ImCross } from 'react-icons/im';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    QueryCache,
    ReactQueryCacheProvider,

} from 'react-query'
import Loader from '../../components/Loader/Loader';



// const queryClient = new QueryClient();
// const queryCache = new QueryCache();


export const CartList = () => {

    // let [subprice , setSubprice] = useState([])

    let { data: order, isLoading } = useQuery("orders", () =>
        fetch("http://localhost:3000/api/orders").then((res) => res.json())
    );


    if (isLoading) {
        return <Loader> </Loader>
    }
    let orders = order.Orders;
    // setSubprice(orders)
    console.log(orders.price);

    return (
        
        <div className='mt-24 mx-5 lg:mx-24 '>
            <div class="overflow-x-auto">
                <table class="table w-full text-xl">
                    <thead>
                        <tr>
                            <th className='bg-[#F6F1E7] decoration-none'></th>
                            <th className='bg-[#F6F1E7] dec text-lg'>Image</th>
                            <th className='bg-[#F6F1E7] text-lg'>Products</th>
                            <th className='bg-[#F6F1E7] text-lg'>Price</th>
                            <th className='bg-[#F6F1E7] text-lg'>Quantity</th>
                            <th className='bg-[#F6F1E7] text-lg'>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td> <ImCross /> </td>
                                <td>
                                    <Image height={`100`} width={`100`} src={`https://themefie.com/html/foodka/assets/img/widget/01.png`} alt="img" />
                                </td>
                                <td>
                                    <div>
                                        {/* <h5>All Season {order.name} </h5> */}
                                        <ul>
                                            <li><span>Order Size: </span>Large</li>
                                            <li><span>Order Name: </span> {order.name} </li>
                                        </ul>
                                    </div>
                                </td>
                                <td>$ {order.price} </td>
                                <td class="p-4 px-6 text-center whitespace-nowrap">
                                    <div>
                                        <button class="px-2 py-0 shadow">-</button>
                                        <input
                                            type="text"
                                            name="qty"
                                            value={order.quantity}
                                            class="w-12 text-center bg-gray-100 outline-none"
                                        />
                                        <button class="px-2 py-0 shadow">+</button>
                                    </div>
                                </td>

                                <td>$  {order.price * order.quantity}</td>
                                
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="my-5 flex flex-col lg:flex-row justify-around pb-10">
                <div className='flex flex-col lg:flex-row gap-3 my-5 w-full'>
                    <input type="text" placeholder="Coupon Code" class="input w-full lg:w-4/6  h-[56px]" />
                    <button class="btn border-none w-auto font-bold text-lg bg-[#FDCE29] hover:bg-[#FDCE29] h-[56px] rounded-md">APPLY COUPON</button>
                </div>
                <div className='w-full flex lg:justify-end  lg:px-5 my-5'>
                    <button class="btn border-none w-full lg:w-1/2 font-bold text-lg bg-[#CC2829] hover:bg-[#CC2829] text-white h-[56px] rounded-md">UPDATE CART</button>
                </div>
                <div className='bg-white rounded-lg w-full my-5'>
                    <div class="p-5">
                        <h5 className='text-xl font-semibold mb-4'>Cart totals</h5>
                        <ul className='text-lg font-semibold'>
                            <li className='my-2'>Subtotal<span className='float-right'>$ {} </span></li>
                            <li class="text-[#CC2829] my-2">Total<span className='float-right'>$50.00</span></li>
                        </ul>
                    </div>
                    <button class="btn border-none font-bold text-lg bg-[#FDCE29] rounded-t-none w-full overflow-hidden hover:bg-[#FDCE29] h-[56px] ">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
