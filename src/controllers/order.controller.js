import Order from '../models/Order.js';
import OrderService from '../services/order.service.js'

export const getOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAll();
        res.json(orders);
    } catch (err) {
        console.error("Failed to load orders", err);
        res.status(500).json({ message: "Failed to load orders" });
    }
};

export const addOrder = async (req, res) => {
    try {
        const order = await OrderService.add(req.user.id, req.body);
        res.json(order)
    } catch (err) {
        console.error("Failed to add an order", err);
        res.status(500).json({ message: "Failed to add an order"});
    }
}