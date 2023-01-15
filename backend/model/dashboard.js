import mongoose from "mongoose";

const structure = mongoose.Schema(
    {
        name: String,
        address: String,
        city: String,
        state: String,
        zip: String
    }
);

const model = mongoose.model('dashboard',structure);
export default model;