import { Application } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import { load } from "jsr:@std/dotenv";
import router from "./routes/index.ts";
import connectMongo from "./configs/mongo.config.ts";

const app = new Application();

await connectMongo()

app.use(router.routes());
app.use(router.allowedMethods());

await load({ export: true });
await app.listen({ port: Number(Deno.env.get("PORT")) });
