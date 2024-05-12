import { User } from '@/model/userSchema';
import { transFromMongoIdByObject } from '@/utils/data-utils';
import bcrypt from 'bcrypt';

export const registerService = async userInfo => {
    try {
        const user = new User(userInfo);
        return user.save();
    } catch (err) {
        throw err;
    }
};

export const loginService = async (email, password) => {
    try {
        const user = await User.findOne({ email }).lean();
        if (!user) throw new Error('User not found');
        const hashPassword = user.password;
        const isMatched = await bcrypt.compare(password, hashPassword);
        if (isMatched) return transFromMongoIdByObject(user);
        else throw new Error('Password is not matched');
    } catch (err) {
        throw err;
    }
};

// favorite recipe add and remove service
export const favoriteRecipeService = async (recipeId, authId) => {
    const foundUser = await User.findById(authId);
    const isFavorite = foundUser.favourites.find(
        favoriteRecipeId => favoriteRecipeId === recipeId
    );
    if (!isFavorite) {
        foundUser.favourites.push(recipeId);
    } else {
        foundUser.favourites.pull(recipeId);
    }
    const user = await foundUser.save();
    return transFromMongoIdByObject(JSON.parse(JSON.stringify(user)));
};
