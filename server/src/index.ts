import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";

import { Server } from "socket.io";
import { createServer } from "http";

import { dataSource } from "./config/datasource";
import { userRouter } from "./routes/user";
import { socket } from "./socket";

dotenv.config();

dataSource
    .initialize()
    .then(() => {
        console.log("[TypeORM] DataSource has been initialized!");
    })
    .catch((err) => {
        console.error("[TypeORM] Error during DataSource Initialization : ", err);
    });

const PORT = process.env.PORT;

const app = express();
const server = createServer(app);

socket.initialize(server);
app.use(express.json());
app.use("/user", userRouter);

socket.io().on("connection", (client) => {
    console.log(client.id);
});

server.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});
