import mongoose from "mongoose";

const jobScheema = new mongoose.Scheema({
    title: {
        type: String,
        required: true
    },
    disscription: {
        type: String,
        required: true
    },
    requirements: [{
        type: String,
    }],
    salary: {
        type: Number ,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String, 
        required: true
    },
    position: {
        type: Number,
        required: true
    }, 
    company: {
        type: mongoose.Scheema.Types.ObkectId,
        ref: 'Company',
        required: true 
    },
    created_by: {
        type: mongoose.Scheema.Types.ObkectId,
        ref: 'User',
        required: true 
    },
    applications: {
        type: mongoose.Scheema.Types.ObkectId,
        ref: 'Application'
    }
     
},{timestamps: true})


export const Job = mongoose.model("Job", jobScheema);