import Review from '../models/Review.js';


export const addReview = async (req, res) => {
    const review = await Review.create({
    user: req.user.id,
    toy: req.body.toyId,
    rating: req.body.rating,
    comment: req.body.comment
    });
    res.json(review);
};