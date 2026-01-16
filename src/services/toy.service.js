import Toy from "../models/Toy.js";

class ToyService {
    static getAllToys = async () => {
        return await Toy.find();
    }

    static async getToyById(toyId) {
        const toy = Toy.findById(toyId);
        if(!toy) {
            throw new Error("Toy not found");
        }

        return toy;
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

        return await Toy.find(query);
    }
}

export default ToyService;