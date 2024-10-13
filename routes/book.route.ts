import { Router } from "https://deno.land/x/oak@v17.1.0/mod.ts";

const bookRouter = new Router();

bookRouter.get("/api/books", (ctx) => {
    ctx.response.body = { message: "book list is called." };
});

export default bookRouter;
