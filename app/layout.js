import Navbar from '@/components/Navbar';
import { connectMongo } from '@/utils/connect-mongo';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';
// import AuthProvider from './provider/AuthProvider';

const AuthProvider = dynamic(() => import('./provider/AuthProvider'), {
    ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Home - khana-khazana',
    description: 'This is the home page of khana-khazana',
};

export default async function RootLayout({ children, modal }) {
    await connectMongo();
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Navbar />
                    <main>
                        {children}
                        {modal}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
