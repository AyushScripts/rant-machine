import mongoose from "mongoose";

const rantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return v.trim().split(/\s+/).length <= 20; // Maximum 20 words
                },
                message: props => `${props.value} exceeds the maximum word count of 20`
            }
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
