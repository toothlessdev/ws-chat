import express, { Request, Response } from "express";
import { userService } from "../services/user";

const router = express.Router();

router.post("/signup", userService.createUser);

// router.get("/users", userService.)

export { router as userRouter };
