import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("RUNNING ON PORT", PORT);
});
