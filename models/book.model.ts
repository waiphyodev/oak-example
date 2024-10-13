import { model, Schema } from "npm:mongoose@8.7.1";

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."],
        },
        authorId: {
            type: String,
            ref: "Author",
            required: [true, "Author is required."],
        },
    },
    {
        collection: "books",
        versionKey: false,
    }
);

const Book = model("Book", bookSchema);

export default Book;
