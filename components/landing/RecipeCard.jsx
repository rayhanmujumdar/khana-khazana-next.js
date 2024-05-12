import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard() {
    return (
        <Link href="/details/1">
            <div className="card">
                <Image
                    src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                    className="rounded-md"
                    alt="recipe-image"
                    width={300}
                    height={300}
                />
                <h4 className="my-2">Chef John&aps;s Turkey Sloppy Joes</h4>
                <div className="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ 5.0</span>
                    <span>By: John Doe</span>
                </div>
            </div>
        </Link>
    );
}
