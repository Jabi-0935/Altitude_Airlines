import express from "express";
import { resolve } from "path";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import AppError from "./utils/appError.js";
import errorHandler from "./utils/errorHandler.js";
import { NODE_ENV } from "./utils/config.js";
import authRouter from "./routes/authRouter.js";
import customerRouter from "./routes/customerRouter.js";
import ticketRouter from "./routes/ticketRouter.js";
import flightRouter from "./routes/flightRouter.js";
import airportRouter from "./routes/airportRouter.js";

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(cookieParser());

//REQUEST LOGGER
if (NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//ROUTES
app.use("/api/auth", authRouter);
app.use("/api/customer", customerRouter);
app.use("/api/ticket", ticketRouter);
app.use("/api/flight", flightRouter);
app.use("/api/airport", airportRouter);

// Add a route for the root ("/")
app.get("/", (req, res) => {
  res.send("Welcome to the Airline Booking System API");
});

// Serve client in production
if (NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, "client", "build", "index.html"));
  });
}

// NO URL ERROR HANDLING
app.all("*", (req, res, next) => {
  next(new AppError(`No url found for ${req.originalUrl}`, 404));
});

// Error Handler
app.use(errorHandler);

app.set('view engine', 'ejs');

export default app;
