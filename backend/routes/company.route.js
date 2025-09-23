import express from "express";
import isAuhenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
const router = express.Router()

router.route("/register").post(isAuhenticated, registerCompany)
router.route("/get").post(isAuhenticated, getCompany)
router.route("/get/:id").get(isAuhenticated, getCompanyById)
router.route("/update/:id").put(isAuhenticated, updateCompany)

export default router