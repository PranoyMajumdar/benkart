import { Router } from "express";
import { authRouter } from "@/routes/auth";

export const mainRouter = Router();

mainRouter.use("/auth", authRouter);