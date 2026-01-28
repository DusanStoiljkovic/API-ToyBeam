import Cart from "../models/Cart";
import Toy from "../models/Toy";

export class CartService {
    static addToCart = async (userId, toyId) => {
        const toy = await Toy.findById(toyId);
        if(!toy) {
            throw new Error("Toy not found");
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

        cart.items.push({ toy: toyId })
        cart.totalPrice += toy.price;

        await cart.save();
        return cart;
    }
}


