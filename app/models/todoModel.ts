import { Model, Schema, model, models } from "mongoose";

interface TodoDocument extends Document {
    title: string;
    isDone: boolean;
}

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isDone: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const TodoModel = models.Todo || model("Todo", todoSchema);

export default TodoModel as Model<TodoDocument>;