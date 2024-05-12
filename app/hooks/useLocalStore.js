import { useEffect, useState } from 'react';

export default function useLocalStore(initialState) {
    const [auth, setAuth] = useState(
        JSON.parse(localStorage.getItem('auth')) || initialState
    );
    useEffect(() => {
        if (!auth) {
            localStorage.setItem('auth', initialState);
        }
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth, initialState]);
    return { auth, setAuth };
}
