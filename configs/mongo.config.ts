import { load } from "jsr:@std/dotenv";
import mongoose from "npm:mongoose@8.7.1";

const connectMongo = async () => {
    await load({ export: true });
    await mongoose.connect(`${Deno.env.get("MONGODB_URI")}`);
};

export default connectMongo;
