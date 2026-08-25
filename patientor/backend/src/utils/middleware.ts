import { NewPatientSchema } from "./schemas.ts";
import { z } from "zod";
import type { NextFunction, Response, Request } from "express";

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

export const newPatientParser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    NewPatientSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};
