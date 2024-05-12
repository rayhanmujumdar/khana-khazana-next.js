import { Recipe } from '@/model/recipeSchema';
import {
    transFromMongoIdByArray,
    transFromMongoIdByObject,
} from '@/utils/data-utils';
import { cache } from 'react';

export const getAllRecipesByCategory = async category => {
    let recipes = [];
    if (category === 'all' || category === undefined) {
        recipes = await Recipe.find({}).lean();
    } else {
        const regex = new RegExp(category);
        recipes = await Recipe.find({
            category: { $regex: regex, $options: 'i' },
        }).lean();
    }
    return transFromMongoIdByArray(recipes);
};

export const getRecipesById = cache(async recipeId => {
    const recipes = await Recipe.findById(recipeId).lean();
    return transFromMongoIdByObject(recipes);
});

export const getAllCategories = async () => {
    const recipes = await getAllRecipesByCategory();
    const categories = recipes?.map(recipe => recipe.category);
    const uniqCategories = [...new Set(categories)];
    return uniqCategories;
};
