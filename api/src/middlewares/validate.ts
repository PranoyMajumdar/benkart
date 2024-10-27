import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validate = (zodObj: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const zodRes = await zodObj.safeParseAsync(req.body);
    if (zodRes.success) {
      return next();
    }
    res.status(401).json(zodRes);
  };
};
