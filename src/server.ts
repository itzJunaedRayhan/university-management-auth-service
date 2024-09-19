import app from "./app";
import config  from "./config/index";
import mongoose from "mongoose";

async function bootstrap () {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database is connected successfully`);

        app.listen(config.port, () => {
            console.log(`Applistening on port ${config.port}`);
        })
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}

bootstrap();