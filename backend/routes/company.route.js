import express from "express";
import isAuhenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";
const router =  express.Router()

router.route("/register").post(isAuhenticated, registerCompany)
router.route("/get").get(isAuhenticated, getCompany)
router.route("/get/:id").get(isAuhenticated, getCompanyById)
router.route("/update/:id").put(isAuhenticated, singleUpload, updateCompany)

export default router