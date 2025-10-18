import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
        }
    ]
}, { timestamps: true });

export const Todo = mongoose.model("Todo", TodoSchema); // model 2 que puchata hai ki naam kya hai or schema kya hai
