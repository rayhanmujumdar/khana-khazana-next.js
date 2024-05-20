'use client';

import { useAuth } from '@/app/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';

export default function RedirectAuth({ children }) {
    const { auth } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    if (auth) {
        router.push('/');
        return null;
    } else {
        return children;
    }
}
