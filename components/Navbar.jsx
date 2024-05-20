'use client';
import { useAuth } from '@/app/hooks/useAuth';
import project_logo from '@/public/assets/logo-svg.png';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation';
export default function Navbar() {
    const pathname = usePathname();
    const { auth, setAuth } = useAuth();
    const router = useRouter();
    const navList = [
        {
            name: 'Home',
            href: '/',
            active: pathname === '/',
        },
        {
            name: 'Recipe',
            href: '/recipes',
            active: pathname === '/recipes',
        },
        {
            name: 'About us',
            href: '/about',
            active: pathname === '/about',
        },
    ];
    const handleSignOut = () => {
        setAuth(null);
        router.push('/login');
        window.location.prev = pathname;
    };
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src={project_logo}
                            alt="project-logo"
                            className="object-cover h-[40px]"
                        />
                        <span className="text-xl font-bold">Khana Khazana</span>
                    </div>
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">
                    {navList.map(list => (
                        <li
                            key={list.href}
                            className={`py-2 ${list.active && 'active'}`}
                        >
                            <Link href={list.href}>{list.name}</Link>
                        </li>
                    ))}

                    {auth ? (
                        <>
                            <li className="py-2">
                                <span>
                                    | {auth.firstName} {auth.lastName} |
                                </span>
                            </li>
                            <li
                                onClick={handleSignOut}
                                className="py-2 bg-teal-400 px-6 rounded-md text-white content-center cursor-pointer"
                            >
                                Sign out
                            </li>
                        </>
                    ) : (
                        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
