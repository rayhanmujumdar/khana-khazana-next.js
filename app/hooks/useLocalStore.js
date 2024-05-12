import { useEffect, useState } from 'react';

export default function useLocalStore(initialState) {
    const [auth, setAuth] = useState(initialState);
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth) {
            setAuth(auth);
        } else {
            setAuth(initialState);
        }
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [initialState, setAuth]);
    return {
        auth,
        setAuth,
    };
}
