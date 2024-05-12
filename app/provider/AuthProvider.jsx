import { useState } from 'react';
import { AuthContext } from '../context';
import useLocalStore from '../hooks/useLocalStore';

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useLocalStore(null);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
