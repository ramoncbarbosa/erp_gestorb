import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
  role: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Token não localizado!" });
  }

  const [, token] = authToken.split(" ");

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET não esta definida nas variáveis de ambiente!")
    }

    const { sub, role } = verify(token, secret) as Payload;

    req.user = { id: sub, role };
    return next();

  } catch (error) {

    console.log("Erro de autenticação: ", error);
    return res.status(401).json({ error: "Token inválido!" });

  }
}