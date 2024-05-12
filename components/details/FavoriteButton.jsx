'use client';
import { favoriteRecipeAction } from '@/app/actions';
import { useAuth } from '@/app/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
export default function FavoriteButton({ recipeId }) {
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
    );
}
