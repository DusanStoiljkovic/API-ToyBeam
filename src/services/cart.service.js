import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export class CartService {

    static async getCartByUserId(userId) {
        return Cart.findOne({ userId }).populate('products.productId');
    }

    static async addToCart(userId, productId, quantity) {
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                products: [],
                totalPrice: 0
            });
        }

        if (cart.products.some(p => p.productId.toString() === productId)) {
            cart.products = cart.products.map(p => {
                if (p.productId.toString() === productId) {
                    p.quantity += quantity;
                }
                return p;
            });
        } else {
            cart.products.push({ productId, quantity });
        }

        console.log("quantity: ", typeof quantity);
        console.log("product price:", typeof product.price);
        console.log("total price before addition:", typeof cart.totalPrice);

        cart.totalPrice += product.price * quantity;
        cart.totalPrice = Number(cart.totalPrice.toFixed(2));

        await cart.save();
        return cart;
    }

    static async editQuantity(userId, productId, quantity) {
        quantity = Number(quantity);

        if (quantity < 1) {
            throw new Error("Quantity must be at least 1");
        }

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            throw new Error("Cart not found");
        }   

        const item = cart.products.find(
            p => p.productId.toString() === productId.toString().trim()
        );


        if (!item) {
            throw new Error("Product not in cart");
        }

        item.quantity = quantity;
        await cart.save();
        return cart;
    }

    static async removeFromCart(userId, productId, quantity) {
        quantity = Number(quantity) || 1;

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            throw new Error("Cart not found");
        }

        const item = cart.products.find(
            p => p.productId.toString() === productId
        );

        if (!item) {
            throw new Error("Product not in cart");
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }

        if (quantity < item.quantity) {
            item.quantity -= quantity;
        } else {
            cart.products.pull(item._id);
        }

        cart.totalPrice = Number(
            (cart.totalPrice - product.price * quantity).toFixed(2)
        );

        if (cart.totalPrice < 0 || cart.products.length === 0) {
            cart.totalPrice = 0;
        }

        await cart.save();
        return cart;
    }
}

export default CartService;
