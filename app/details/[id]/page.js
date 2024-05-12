import Description from '@/components/details/Description';
import HeroDetails from '@/components/details/HeroDetails';
import { getRecipesById } from '@/services/recipeService';

export async function generateMetadata({ params, searchParams }) {
    const id = params.id;
    const recipeDetails = await getRecipesById(id);
    return {
        title: recipeDetails.name,
        description: recipeDetails.description.slice(0, 100),
        openGraph: {
            images: [recipeDetails.image],
        },
    };
}

export default async function RecipeDetailsPage({ params: { id } }) {
    const recipeDetails = await getRecipesById(id);
    return (
        <main>
            <HeroDetails recipeDetails={recipeDetails} />
            <Description steps={recipeDetails.steps} />
        </main>
    );
}
