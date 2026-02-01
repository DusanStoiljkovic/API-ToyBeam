import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    items: {
      type: [orderItemSchema],
      required: true
    },

    totalPrice: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELED"],
      default: "PENDING"
    },

    shippingAddress: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      postalCode: String
    },

    paymentMethod: {
      type: String,
      enum: ["cash_on_delivery", "card"],
      default: "cash_on_delivery"
    },

    isPaid: {
      type: Boolean,
      default: false
    },

    paidAt: Date,

    deliveredAt: Date
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
