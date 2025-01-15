import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import { routes } from "./routes/routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server online na porta: ${port}`);
})
