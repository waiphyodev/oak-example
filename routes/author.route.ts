import { Router, type RouterContext } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import { createAuthor, getAuthorDetail, getAuthorList } from "../controllers/author.controller.ts";

const authorRouter = new Router();

authorRouter.prefix("/api/authors");

authorRouter.get("/", getAuthorList);
authorRouter.post("/", createAuthor);
authorRouter.get("/:id", (ctx: RouterContext<string>) => {
    ctx.response.body = ctx.params
});

export default authorRouter;
