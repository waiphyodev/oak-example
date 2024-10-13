import { model, Schema } from "npm:mongoose@8.7.1";

const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
        },
    },
    {
        collection: "authors",
        versionKey: false,
    }
);

const Author = model("Author", authorSchema);

export default Author;
