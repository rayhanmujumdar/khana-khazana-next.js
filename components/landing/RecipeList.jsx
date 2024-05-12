import { getAllRecipesByCategory } from '@/services/recipeService';
import RecipeCard from './RecipeCard';

export default async function RecipeList({ category }) {
    const recipes = await getAllRecipesByCategory(category);
    return (
        <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
