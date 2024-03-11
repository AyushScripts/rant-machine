import mongoose from "mongoose";

const rantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true,
        }

    },
    {
        timestamps:true,
    }
)

export const Rant = mongoose.model('Rant', rantSchema);