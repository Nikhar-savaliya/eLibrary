import express from "express";
import cors from "cors";

import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import { config } from "./config/config";

const app = express();

app.use(
  cors({
    // origin: config.frontend_domain,
    origin: config.dashboard_domain,
  })
);
app.use(express.json());

// routes
app.get("/", (req, res, next) => {
  return res.json({ message: "Welcome tho Elib API ⚒️" });
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// global error handler
app.use(globalErrorHandler);

export default app;
