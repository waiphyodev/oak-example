import type { RouterContext } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import Author from "../models/author.model.ts";
import responseHelper from "../helpers/response.helper.ts";

export const getAuthorList = async (ctx: RouterContext<string>) => {
    try {
        const authorList = await Author.find();

        ctx.response.status = 200;
        ctx.response.body = responseHelper.ok(authorList);
    } catch (error) {
        if (error instanceof Error) {
            console.log("author list error => ", error.message);
        }

        ctx.response.status = 500;
        ctx.response.body = responseHelper.unknown();
    }
};

export const createAuthor = async (ctx: RouterContext<string>) => {
    const payload = await ctx.request.body.json();

    try {
        await Author.create(payload);

        ctx.response.status = 201;
        ctx.response.body = responseHelper.created("Author is created");
    } catch (error) {
        if (error instanceof Error) {
            console.log("author create error => ", error.message);
        }

        ctx.response.status = 500;
        ctx.response.body = responseHelper.unknown();
    }
};

export const getAuthorDetail = async (ctx: RouterContext<string>) => {
    const payload = ctx.params;

    try {
        console.log("payload", payload);
        
        ctx.response.status = 200;
        ctx.response.body = responseHelper.ok(payload);
    } catch (error) {
        if (error instanceof Error) {
            console.log("author detail error => ", error.message);
        }

        ctx.response.status = 500;
        ctx.response.body = responseHelper.unknown();
    }
};
