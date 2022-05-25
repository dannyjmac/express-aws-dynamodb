import express from "express";
import { read } from "../controllers";

export const router = express.Router();
router.route("/").get(read);
