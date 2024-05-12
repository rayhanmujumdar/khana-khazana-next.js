import { getAllCategories } from '@/services/recipeService';
import Link from 'next/link';

export const revalidation = 10;

export default async function CategoryList() {
    const categories = await getAllCategories();
    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                <li>
                    <Link href="/" scroll={false}>
                        All Recipes
                    </Link>
                </li>
                {categories.map(category => (
                    <li key={category}>
                        <Link
                            scroll={false}
                            href={`/?category=${encodeURIComponent(category)}`}
                            className="cursor-pointer"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
