import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes";
import authRouter from "./auth/auth.routes";
import swaggerUi from "swagger-ui-express";
import swaggerJson from "./swagger.json";


class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
  }


  /* Configuração do swagger */
  /* "/api-docs", swaggerUi.serve e swaggerUi.setup(swaggerJson) */
  private middleware(): void {
    this.express.use(express.json());
    this.express.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerJson)
    );
  }

  private async database() {
    try {
      await mongoose.connect("mongodb://admin:admin@0.0.0.0:27017/books?authSource=admin");
      console.log("connect database success");
    } catch (err) {
      console.error("Fail to connect database", err);
    }
  }

  private routes(): void {
    this.express.use(routes);
    this.express.use("/auth", authRouter);
  }
}

export default new App().express;
