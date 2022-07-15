import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';
import Loader from '../components/Loader/Loader';
import axios from 'axios';

const useUser = () => {
    const router = useRouter()
    // const [user, setUser] = useState({})
    // const user = useRef({})
    let user = {}

    const ISSERVER = typeof window === "undefined";
    let email = '';
    if (!ISSERVER) {
        email = localStorage.getItem('email')
        // if (!email) {
        //     router.push('/')
        // }
        // useEffect(() => {
        //     fetch(`https://food-court-d87gj4rlj-its-kayes.vercel.app/api/users?email=${email}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.success) {
        //                 setUser(data.user)
        //             }
        //         })
        // }, [email])
    }


    // let email = localStorage.getItem('email')

    let { data, isLoading } = useQuery("user", () => fetch(`https://food-court-d87gj4rlj-its-kayes.vercel.app/api/users?email=${email}`).then(res => res.json()));

    if (isLoading) {
        return <Loader> </Loader>
    }

    if (data.success) {
        user = (data.user)
    }


    // let  data  = axios.get(`https://food-court-d87gj4rlj-its-kayes.vercel.app/api/users?email=${email}`) 
    // let user = { data }

    console.log(email)


    // useEffect(() => {
    //     fetch(`https://food-court-d87gj4rlj-its-kayes.vercel.app/api/users?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 setUser(data.user)
    //             }
    //         })
    // }, [email])

    return user;
};

export default useUser;