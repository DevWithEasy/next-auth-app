import mongoose from 'mongoose';

const NextAuthUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

const NextAuthUser = mongoose.models?.NextAuthUser || mongoose.model('NextAuthUser', NextAuthUserSchema)

export default NextAuthUser;