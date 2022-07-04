import React, { useEffect, useState } from 'react';
// import useSWR from 'swr';
import Products from '../../components/Home/Products';

const fetcher = (url) => fetch(url).then((res) => res.json());

const index = () => {
    return (
        <Products></Products>
    );
};

export default index;

