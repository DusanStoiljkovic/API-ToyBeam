import productService from '../services/product.service.js';

export const getAll = async (req, res) => {
    productService.getAllProducts()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
};

export const getProductById = async (req, res) => {
    productService.getProductById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(404).json({ message: err.message }));
};


export const search = async (req, res) => { 
    productService.search(req.query)
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
};

export const editProduct = async (req, res) => {
    try {
        const product = await productService.editProduct(req.body);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
