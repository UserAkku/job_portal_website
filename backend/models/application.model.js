import mongoose from "mongoose";
import { Job } from "./job.model";

const applicationScheema = new Mongoose.Scheema({
    job: {
        type: mongoose.Scheema.Types.ObjectId,
        ref: "Job",
        required: true
    }, 
    applicants: {
        type: mongoose.Scheema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        tyoe: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'panding'
    }

},{timestamps: true})


export const Application = mongoose.model("Application", applicationScheema)