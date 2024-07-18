import { Request, Response } from "express";
import { UserModel } from "../models/user";
import { dataSource } from "../config/datasource";

const userRepository = dataSource.getRepository(UserModel);

export const userService = {
    readAllUser: async (request: Request, response: Response) => {
        const users = await userRepository.find();
        console.log(users);
    },

    createUser: (request: Request, response: Response) => {
        const body = request.body;
        console.log(body);
        response.json(body);
    },
};
