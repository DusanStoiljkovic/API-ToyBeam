import mongoose from 'mongoose';


const toySchema = new mongoose.Schema(
    {
       name: {
        type: String,
        required: true,
        trim: true
       },

       category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
       },

       image: {
        type: String,
        required: true
       },

       ageRange: {
        type: String,
        required: true
       },

       target: {
        type: String,
        required: true
       },

       price: {
        type: Number,
        required: true, 
        min: 0
       },

       description: {
        type: String,
        required: true
       },

       isActive: {
        type: Boolean,
        default: true
       }
    }, 
    { timestamps: true }   
);

export default mongoose.model('Toy', toySchema);