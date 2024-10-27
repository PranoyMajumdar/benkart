import "dotenv/config";
import express from "express";
import { mainRouter } from "@/config";

const app = express();
app.use(express.json());
app.use("/", mainRouter);

app.listen(process.env.PORT, () => {
  console.log(`=================================`);
  console.log(`======= ENV: ${process.env.NODE_ENV} =======`);
  console.log(`🚀 App listening on the port ${process.env.PORT}`);
  console.log(`=================================`);
});
