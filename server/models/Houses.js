import { Schema } from "mongoose"; 
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
    {
        bedrooms: {type: Number, required: true, min: 1, max: 100},
        bathrooms: {type: Number, required: true, min: 1, max: 100},
        year: {type: Number, required: true, min: 1, max:5000},
        imgUrl: {type: String, required: true, maxLength: 5000, required: true},
        description: {type: String, required: true, minLength: 10, maxLength: 5000},
    },
    {timestamps: true, toJSON: { virtuals: true }}
)