import { useState, useEffect } from 'react';

import api from '../../services/api'

import {useHistory} from "react-router"

export default function useAuth() {
    const history = useHistory()

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
    }

    setLoading(false);
    }, []);
    
    async function handleLogin(data: any) {
        const { data: Data } = await api.post('login', data);

        localStorage.setItem('token', Data.Token);
        api.defaults.headers.Authorization = `Bearer ${Data.Token}`;
        console.log(Data.Token)
        setAuthenticated(true);
        history.push('/abas/inicio');
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        // history.push('/login');
    }
    
    return { authenticated, loading, handleLogin, handleLogout };
}