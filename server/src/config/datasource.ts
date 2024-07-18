import { DataSource } from "typeorm";
import { UserModel } from "../models/user";

export const RootEntities = [UserModel];

export const dataSource = new DataSource({
    type: "sqlite",
    database: "src/config/" + process.env.NODE_ENV + ".db",
    entities: RootEntities,
    synchronize: true,
});
