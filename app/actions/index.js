'use server';

import { loginService, registerService } from '@/services/userService';
import { redirect } from 'next/navigation';

export async function loginAction(formData) {
    try {
        const email = formData.get('email');
        const password = formData.get('password');
        const user = await loginService(email, password);
        return user;
    } catch (err) {
        throw err;
    }
}

export async function registerAction(formData) {
    try {
        const userInfo = Object.fromEntries(formData);
        const user = await registerService(userInfo);
        if (user) {
            redirect('/login');
        }
    } catch (err) {
        throw err;
    }
}
