import Product from "../models/Product.js";

class ProductService {
    static getAllProducts = async () => {
        return await Product.find().populate('category');
    }

    static async getProductById(productId) {
        const product = await Product.findById(productId).populate('category');
        if(!product) {
            throw new Error("Product not found");
        }

        return product;
    }

    static search = async (queryParams) => {
        const query = {};

        if (queryParams.name) {
            query.name = { $regex: queryParams.name, $options: 'i' };
        }

        if (queryParams.category) {
            query.category = queryParams.category;
        }

        if (queryParams.target) {
            query.target = queryParams.target;
        }

        if (queryParams.minPrice || queryParams.maxPrice) {
            query.price = {};
            if (queryParams.minPrice) query.price.$gte = Number(queryParams.minPrice);
            if (queryParams.maxPrice) query.price.$lte = Number(queryParams.maxPrice);
        }

        return await Product.find(query);
    }

    static editProduct = async (productData) => {
        for(const key in productData) {
            if(productData[key] === undefined) {
                return
            }
        }

        const product = await Product.findByIdAndUpdate(productData._id, productData, { new: true });
        return product;
    }
}

export default ProductService;