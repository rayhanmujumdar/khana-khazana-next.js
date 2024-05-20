import RedirectAuth from '@/components/RedirectAuth';
import LoginForm from '@/components/auth/loginForm';
import Link from 'next/link';
export const metadata = {
    title: 'Login - khana-khazana',
    description: 'This is the Login page of khana-khazana',
};

export default function LoginPage() {
    return (
        <RedirectAuth>
            <main>
                <section className="h-screen grid place-items-center">
                    <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                        <h4 className="font-bold text-2xl">Sign in</h4>
                        <LoginForm />

                        <p className="text-center text-xs text-gray-600">Or</p>

                        <Link
                            href="/register"
                            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
                        >
                            Create New Account
                        </Link>
                    </div>
                </section>
            </main>
        </RedirectAuth>
    );
}
