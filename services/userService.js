import { User } from '@/model/userSchema';
import { transFromMongoIdByObject } from '@/utils/data-utils';

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
