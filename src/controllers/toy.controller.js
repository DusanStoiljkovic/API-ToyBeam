import Toy from '../models/Toy.js';


export const getAll = async (req, res) => {
    res.json(await Toy.find());
};

export const getToyById = async (req, res) => {
    const toy = await Toy.findById(req.params.id);
    if(!toy) {
        return res.status(404).json({message: "Toy not found"})
    }
    res.json(toy);
}


export const search = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: 'i' };
        }

        if (req.query.category) {
            query.category = req.query.category;
        }

        if (req.query.target) {
            query.target = req.query.target;
        }

        if (req.query.minPrice || req.query.maxPrice) {
            query.price = {};
            if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
            if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
        }

        const toys = await Toy.find(query);
        res.json(toys);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
