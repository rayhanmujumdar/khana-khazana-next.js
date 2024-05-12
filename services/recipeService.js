const { Recipe } = require('@/model/recipeSchema');
import {
    transFromMongoIdByArray,
    transFromMongoIdByObject,
} from '@/utils/data-utils';

export const getAllRecipes = async () => {
    const recipes = await Recipe.find({}).lean();
    return transFromMongoIdByArray(recipes);
};

export const getRecipesById = async recipeId => {
    const recipes = await Recipe.findById(recipeId).lean();
    return transFromMongoIdByObject(recipes);
};

export const getAllCategories = async () => {
    const recipes = await Recipe.find({}).lean();
    const categories = recipes.map(recipe => recipe.category);
    const uniqCategories = [...new Set(categories)];
    return uniqCategories;
};

export const getRecipesByCategory = async category => {
    const recipes = await Recipe.find({ category }).lean();
    return transFromMongoIdByArray(recipes);
};
