import { Job } from  "../models/job.model.js";

//admin jo post kregaa
export const postJob = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message : "Something is missing",
                success: false
            })
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId,
        })

        return res.status(201).json({
            message : "New job created successfully.",
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
        message: "Server error. Could not create job.",
        error: error.message,
        success: false,
    })
    }
}


//for student

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or : [
                {title : {$regex :keyword, $options : "i"}},
                {description : {$regex : keyword, $options : "i"}},
            ]
        }

        const jobs = await Job.find(query).populate("company") 
        
        //populate jobs meme jo cduri table jinki id hai unko pura fetch krwa deta uski details ko and iye do arguments leta hai  us key ka name jise pura fetch krna hai and usme kitnaa fetch krnaa hai kia kia keys us key ke schema ki

        if (!jobs.length ===  0) {
            return res.status(404).json({
                message : "Jobs not found.",
                success: false
            })
        }

        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

// for student
export const getJobById = async (req, res) => {
    try {

        const jobId = req.params.id;
        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                message : "Jobs not found.",
                success : false
            })
        }

        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

//admin m=ne abhi tk kitne job create kraa hai

export const getAdminJobs = async (req,res) => {
    try {
        const adminId = req.id
        const jobs = await Job.find({created_by: adminId})

        if (!jobs) {
            return res.status(404).json({
                message : "Jobs not found.",
                success : false
            })
        } 

        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

