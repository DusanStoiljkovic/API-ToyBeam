import Cart from "../models/Cart.js";
import Toy from "../models/Product.js";

export class CartService {

    static getCartByUserId = async (userId) => {
        const cart = await Cart.findOne({ user: userId }).populate('items.productId');
        return cart;
    }

    static addToCart = async (userId, productId) => {
        const product = await Toy.findById(productId);
        if(!product) {
            throw new Error("Product not found");
        }

        let cart = await Cart.findOne({
            user: userId
        });

        if(!cart) {
            cart = new Cart({
                user: userId,
                items: [],
                totalPrice: 0
            });
        }

        cart.items.push({ product: productId })
        cart.totalPrice += product.price;

        await cart.save();
        return cart;
    }
}

export default CartService;


