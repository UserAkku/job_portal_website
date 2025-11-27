import express from "express";
import isAuhenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, postJob, getJobById } from "../controllers/job.controller.js";
const router = express.Router()

router.route("/post").post(isAuhenticated, postJob)
router.route("/get").get(isAuhenticated, getAllJobs)
router.route("/getAdminJobs").get(isAuhenticated, getAdminJobs)
router.route("/get/:id").get(isAuhenticated, getJobById)

export default router;

