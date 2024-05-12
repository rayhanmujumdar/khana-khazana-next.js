import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from './provider/AuthProvider';
import { connectMongo } from '@/utils/connect-mongo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Home - khana-khazana',
    description: 'This is the home page of khana-khazana',
};

export default async function RootLayout({ children }) {
    await connectMongo()
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Navbar />
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
