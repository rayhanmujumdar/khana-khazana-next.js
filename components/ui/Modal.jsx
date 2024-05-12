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
    return (
        showModal && (
            <>
                <div onClick={() => router.back()} className="overlay"></div>
                <div className="modal">{children}</div>
            </>
        )
    );
}
