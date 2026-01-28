import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    toys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Toy' }]
});


export default mongoose.model('Cart', cartSchema);