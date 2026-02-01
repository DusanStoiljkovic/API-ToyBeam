import mongoose, { mongo } from 'mongoose';


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  phone: String,
  city: String,
  postalCode: String,
  address: String,
  favouriteProductCategories: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
  ]
}, { timestamps: true });


    
export default mongoose.model('User', userSchema);