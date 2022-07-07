import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const useUser = () => {

    const router = useRouter()
    const [user, setUser] = useState({})
    const ISSERVER = typeof window === "undefined";
    let email = '';
    if (!ISSERVER) {
        email = localStorage.getItem('email')
        useEffect(() => {
            fetch(`http://localhost:3000/api/users?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setUser(data.user)
                    }
                })
        }, [email])
    }

    if (email) {

    }
    return { user };
};

export default useUser;