'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Modal({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [showModal, setShowModal] = useState(pathname.includes('/details/'));
    useEffect(() => {
        setShowModal(pathname.includes('/details/'));
    }, [pathname]);
    const handleRedirect = () => {
        console.log(window.location.prev);
        if (window.location.prev?.includes('/login')) {
            router.push('/', { scroll: false });
            window.location.prev = null;
        } else {
            router.back();
        }
    };
    return (
        showModal && (
            <>
                <div onClick={handleRedirect} className="overlay"></div>
                <div className="modal">{children}</div>
            </>
        )
    );
}
