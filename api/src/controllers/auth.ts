import type { Request, Response } from "express";
import z from "zod";
import { registerSchema } from "@/schemas";


export const profileController = async (req: Request, res: Response) => {

  res.json("TODO: :/");
};

export const loginController = (req: Request, res: Response) => {
  res.json("TODO: :/");
};

export const logoutController = (req: Request, res: Response) => {
  res.json("TODO: :/");
};

export const registerController = (req: Request, res: Response) => {
  const body: z.infer<typeof registerSchema >= req.body;
  res.json(body);
};

