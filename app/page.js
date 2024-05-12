import Banner from '@/components/landing/Banner';
import CategoryList from '@/components/landing/CategoryList';
import RecipeList from '@/components/landing/RecipeList';

export default function Home() {
    return (
        <>
            <section class="container">
                <Banner />
            </section>
            <section class="container py-8">
                <div class="grid grid-cols-12 py-4">
                    <CategoryList />
                    <RecipeList />
                </div>
            </section>
        </>
    );
}
