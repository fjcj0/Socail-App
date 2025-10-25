import "dotenv/config";
import express from 'express';
import job from "./config/cron.js";
const app = express();
if (process.env.NODE_ENV === 'production') job.start();
app.use(express.json());
app.get('/', (request, response) => {
    return response.status(200).send(
        `<h1>Your server is running successfully on ${process.env.PORT}</h1>`
    );
});
app.listen(process.env.PORT, () => {
    console.log(`Your localhost is running: http://localhost:${process.env.PORT}`);
});