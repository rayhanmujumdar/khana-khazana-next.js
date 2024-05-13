'use client';
import { registerAction } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function RegisterForm() {
    const [error, setError] = useState(null);
    const [pending, startTransition] = useTransition();
    const router = useRouter();
    const registerActionForm = async e => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const user = await registerAction(formData);
            if (user) {
                router.push('/login');
            } else {
                throw new Error('something went wrong');
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form
            className="login-form"
            onSubmit={e => startTransition(() => registerActionForm(e))}
        >
            <div>
                <p className="text-red-500 text-sm">{error}</p>
            </div>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
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
