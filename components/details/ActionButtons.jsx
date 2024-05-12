'use client';

import { favoriteRecipeAction } from '@/app/actions';
import { useAuth } from '@/app/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function ActionButtons({ recipeId }) {
    const { auth, setAuth } = useAuth();
    const pathname = usePathname();
    const router = useRouter();
    const [favorite, setFavorite] = useState(
        auth?.favourites?.some(favoriteId => favoriteId === recipeId)
    );
    const [pending, startTransition] = useTransition();
    const handleFavorite = async () => {
        if (!auth) {
            router.push('/login');
            window.location.prev = pathname;
        } else {
            const updatedUser = await favoriteRecipeAction(recipeId, auth?.id);
            setAuth(updatedUser);
            setFavorite(!favorite);
        }
    };
    return (
        <div className="flex gap-4 justify-end">
            <button
                onClick={() => startTransition(handleFavorite)}
                className={`flex gap-2  cursor-pointer hover:text-[#eb4a36] ${
                    favorite ? 'text-[#eb4a36]' : 'text-gray-600'
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={favorite ? 'red' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <span>{pending ? 'Process...' : 'Favourite'}</span>
            </button>

            <button className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Share</span>
            </button>
        </div>
    );
}
