import { AuthService } from '../services/auth.service.js';


export const register = async (req, res) => {
    AuthService.register(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({ message: err.message }));
};


export const login = async (req, res) => {
    AuthService.login(req.body)
        .then(token => res.json({ token }))
        .catch(err => res.status(400).json({ message: err.message }));
};