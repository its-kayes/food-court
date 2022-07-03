import React, { useEffect, useState } from 'react';
// import useSWR from 'swr';
import Products from '../../components/Home/Products';

const fetcher = (url) => fetch(url).then((res) => res.json());

const index = () => {



    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    // const { data, error } = useSWR('/api/hello', fetcher);

    //Handle the error state
    // if (error) return <div>Failed to load</div>;
    //Handle the loading state
    // if (!data) return <div>Loading...</div>;


    useEffect(() => {
        async function fetchData(){
            const res = await fetch('http://localhost:3000/api/hello');
            const data = await res.json();
            setProducts(data);
            console.log(data);
        }
    }, [])

    console.log(products);

    if(loading){ return <h4 className='text-2xl'>Loading...</h4> }

    return (
        <Products></Products>
    );
};

export default index;

