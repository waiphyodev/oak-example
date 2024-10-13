import authorRouter from "./author.route.ts";
import { Router } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import bookRouter from "./book.route.ts";

const router = new Router();

router.use(authorRouter.routes());
router.use(authorRouter.allowedMethods());

router.use(bookRouter.routes());
router.use(bookRouter.allowedMethods());

export default router;

