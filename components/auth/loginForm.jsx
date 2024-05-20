'use client';

import { loginAction } from '@/app/actions';
import { useAuth } from '@/app/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function LoginForm() {
    const [error, setError] = useState(null);
    const router = useRouter();
    const { auth, setAuth } = useAuth();
    const pathname = usePathname();
    const [pending, startTransition] = useTransition();
    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
            const user = await loginAction(formData);

            if (!user) {
                throw new Error('Invalid email or password');
            }
            setAuth(user);
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form
            className="login-form"
            onSubmit={e => startTransition(() => handleSubmit(e))}
        >
            <div>
                <p className="my-2 text-red-400 text-sm">{error}</p>
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            <button
                type="submit"
                disabled={pending}
                className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4 disabled:bg-red-400"
            >
                {pending ? 'Submitting....' : 'Log in'}
            </button>
        </form>
    );
}
