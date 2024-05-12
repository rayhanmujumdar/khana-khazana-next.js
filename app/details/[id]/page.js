import DetailsPage from '@/components/details/DetailsPage';
import { getRecipesById } from '@/services/recipeService';

export async function generateMetadata({ params, searchParams }) {
    const id = params.id;
    const recipeDetails = await getRecipesById(id);
    return {
        title: recipeDetails.name,
        description: recipeDetails.description.slice(0, 100),
        openGraph: {
            images: [recipeDetails?.thumbnail],
        },
    };
}

export default async function RecipeDetailsPage({ params: { id } }) {
    return <DetailsPage recipeId={id} />;
}
