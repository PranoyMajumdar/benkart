import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  profileController,
} from "../controllers";
import { validate } from "@/middlewares";
import { registerSchema } from "@/schemas";

export const authRouter = Router();

authRouter.post("/register", validate(registerSchema), registerController);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
authRouter.get("/profile", profileController);
