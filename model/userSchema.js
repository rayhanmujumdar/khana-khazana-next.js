import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'last name is required'],
    },
    email: {
        type: String,
        required: true,
        match: `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
    },
    password: {
        type: String,
        min: 4,
        max: 20,
        required: [true, 'password is required'],
    },
    favourites: {
        type: [String],
    },
});

userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (!user.isModified('password')) return next();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user?.password, saltRounds);
        user.password = hashedPassword;
    } catch (error) {
        next(error);
    }
});

export const User =
    mongoose.models.Users || mongoose.model('Users', userSchema);
