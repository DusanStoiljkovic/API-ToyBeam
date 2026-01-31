import Cart from '../models/Cart.js';
import Toy from '../models/Product.js';
import cartService from '../services/cart.service.js';


export const getCart = async (req, res) => {
    try {
        const cart = await cartService.getCartByUserId(req.user.id);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const addToCart = async (req, res) => {
  console.log("USER: ", req.user)
  console.log("BODY: ", req.body)
  try {
    const cart = await cartService.addToCart(req.user.id, req.body.productId, req.body.quantity);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await cartService.editQuantity(req.user.id, productId, quantity);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const removeFromCart = async (req, res) => {
  console.log("USER: ", req.user)
  console.log("BODY: ", req.body)
  try {
    const cart = await cartService.removeFromCart(req.user.id, req.body.productId, req.body.quantity);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
