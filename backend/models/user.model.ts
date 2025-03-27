import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String
        },
        profilepicture: {
            type: Image
        },
        // need to add other stuff think about it...
    }, {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema)

export default User;

