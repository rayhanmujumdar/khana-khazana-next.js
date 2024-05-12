import CategoryList from '@/components/landing/CategoryList';
import RecipeList from '@/components/landing/RecipeList';
import Loading from '@/components/ui/Loading';
import { Suspense } from 'react';

export default function RecipeCategoryPage({ searchParams: { category } }) {
    return (
        <section className="container py-8">
            <div className="grid grid-cols-12 py-4">
                <Suspense fallback={<Loading />}>
                    <CategoryList categoryName={category} />
                </Suspense>

                <Suspense fallback={<Loading />}>
                    <RecipeList category={category} />
                </Suspense>
            </div>
        </section>
    );
}
