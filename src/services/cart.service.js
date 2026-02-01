import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export class CartService {

  // =========================
  // GET CART
  // =========================
  static async getCartByUserId(userId) {
    return await Cart.findOne({ userId })
      .populate("products.productId", "name price image");
  }

  // =========================
  // ADD TO CART
  // =========================
  static async addToCart(userId, productId, quantity = 1) {
    const product = await Product.findById(productId);
    if (!product) throw new Error("Product not found");

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, products: [], totalPrice: 0 });
    }

    const existing = cart.products.find(
        p => p.productId.toString() === productId
    );

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.products.push({ productId, quantity });
    }

    cart.totalPrice = CartService.calculateTotalPrice({
        ...cart.toObject(),
        products: [
            ...cart.products,
            ...(existing ? [] : [{ productId: product, quantity}])
        ]
    })

    await cart.save();

    return await Cart.findOne({ userId })
        .populate("products.productId", "name price image");
    }


  // =========================
  // EDIT QUANTITY
  // =========================
  static async editQuantity(userId, productId, quantity) {
    quantity = Number(quantity);

    if (quantity < 1) {
      throw new Error("Quantity must be at least 1");
    }

    const cart = await Cart.findOne({ userId })
      .populate("products.productId", "name price image");

    if (!cart) {
      throw new Error("Cart not found");
    }

    const item = cart.products.find(
      p => p.productId._id.toString() === productId
    );

    if (!item) {
      throw new Error("Product not in cart");
    }

    item.quantity = quantity;
    cart.totalPrice = CartService.calculateTotalPrice(cart);

    await cart.save();
    return cart;
  }

  // =========================
  // REMOVE FROM CART
  // =========================
  static async removeFromCart(userId, productId, quantity = 1) {
    quantity = Number(quantity);

    const cart = await Cart.findOne({ userId })
      .populate("products.productId", "name price image");

    if (!cart) {
      throw new Error("Cart not found");
    }

    const item = cart.products.find(
      p => p.productId._id.toString() === productId
    );

    if (!item) {
      throw new Error("Product not in cart");
    }

    if (quantity < item.quantity) {
      item.quantity -= quantity;
    } else {
      cart.products.pull(item._id);
    }

    cart.totalPrice = CartService.calculateTotalPrice(cart);
    await cart.save();

    return cart;
  }

  // =========================
  // CALCULATE TOTAL PRICE
  // =========================
  static calculateTotalPrice(cart) {
  return Number(
    cart.products.reduce((sum, item) => {
      return sum + (item.productId?.price || 0) * item.quantity;
    }, 0).toFixed(2)
  );
}
}

export default CartService;
