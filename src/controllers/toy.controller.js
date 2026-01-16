import Toy from '../models/Toy.js';
import toyService from '../services/toy.service.js';

export const getAll = async (req, res) => {
    toyService.getAllToys()
        .then(toys => res.json(toys))
        .catch(err => res.status(500).json({ message: err.message }));
};

export const getToyById = async (req, res) => {
    toyService.getToyById(req.params.id)
        .then(toy => res.json(toy))
        .catch(err => res.status(404).json({ message: err.message }));
};


export const search = async (req, res) => { 
    toyService.search(req.query)
        .then(toys => res.json(toys))
        .catch(err => res.status(500).json({ message: err.message }));
};
