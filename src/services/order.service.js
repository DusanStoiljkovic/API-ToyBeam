import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

class OrderService {
  static getAll = async () => {
    return await Order.find()
      .populate("user", "email firstName lastName");
  };

  static add = async (userId, body) => {
    try {
      const order = new Order({
      user: userId,
      ...body
    });

    await order.save();

    await Cart.findOneAndDelete(
      { userId: userId }
    );

    return order;
    } catch (error) {
      throw new Error("Order creation failed.")
    }
    
  };
}

export default OrderService;
