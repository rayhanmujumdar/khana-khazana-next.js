'use server';

import {
    favoriteRecipeService,
    loginService,
    registerService,
} from '@/services/userService';
import { connectMongo } from '@/utils/connect-mongo';

export async function loginAction(formData) {
    await connectMongo();
    try {
        const email = formData.get('email');
        const password = formData.get('password');
        const user = await loginService(email, password);
        return user;
    } catch (err) {
        throw err;
    }
}

export async function registerAction(formData) {
    await connectMongo();
    try {
        const userInfo = Object.fromEntries(formData);
        const user = await registerService(userInfo);
        return JSON.stringify(user);
    } catch (err) {
        throw err;
    }
}

// favorite recipe add and remove action
export async function favoriteRecipeAction(recipeId, authId) {
    await connectMongo();
    try {
        const updateFavoriteRecipeInUser = await favoriteRecipeService(
            recipeId,
            authId
        );
        return updateFavoriteRecipeInUser;
    } catch (err) {
        throw err;
    }
}
