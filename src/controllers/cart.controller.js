import Cart from '../models/Cart.js';
import Toy from '../models/Product.js';
import cartService from '../services/cart.service.js';


export const getCart = async (req, res) => {
    cartService.getCartByUserId(req.user.id)
        .then(cart => res.json(cart))
        .catch(err => res.status(500).json({ message: err.message }));
};


export const addToCart = async (req, res) => {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) cart = await Cart.create({ user: req.user.id, toys: [] });
    cart.toys.push(req.body.toyId);
    await cart.save();
    res.json(cart);
};


export const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({user: req.user.id})

    if(!cart)
        return res.status(404).json({message: "Cart not found"});

    res.json(cart);

    cart.toys = cart.toys.filter(toy => toy._id !== req.params.id)

  } catch (err) {
    res.status(500).json({message: err.message})
  }

};
