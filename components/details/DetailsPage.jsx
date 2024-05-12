import { getRecipesById } from "@/services/recipeService";
import HeroDetails from "./HeroDetails";
import Description from "./Description";

export default async function DetailsPage({recipeId}) {
    const recipeDetails = await getRecipesById(recipeId);
    return (
        <main>
            <HeroDetails recipeDetails={recipeDetails} />
            <Description steps={recipeDetails.steps} />
        </main>
    );
}