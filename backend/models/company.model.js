import mongoose from "mongoose"; 
 
const companyScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    disscription: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String 
    },
    logo: {
        type: String //url to company logo
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        req: 'User',
        required: true 
    }
},{timestamps: true})

export const Company = mongoose.model("Company", companyScheema)