import { getBlurData } from '@/utils/blur-generator';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard({ recipe }) {
    const { id, name, thumbnail, rating, author } = recipe;
    const { base64 } = getBlurData(thumbnail);
    return (
        <Link href={`/details/${id}`}>
            <div className="card">
                <Image
                    src={thumbnail}
                    className="rounded-md"
                    alt="recipe-image"
                    width={300}
                    height={300}
                    blurDataURL={base64}
                />
                <h4 className="my-2">{name}</h4>
                <div className="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ {rating}.0</span>
                    <span>By: {author}</span>
                </div>
            </div>
        </Link>
    );
}
