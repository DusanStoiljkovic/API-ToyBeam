import reviewService from '../services/review.service.js';

export const getReviewsByProductId = async (req, res) => {
    try {
        const reviews = await reviewService.getReviewsByProductId(req.params.productId);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getReviewsByUserId = async (req, res) => {
    try {
        const reviews = await reviewService.getReviewsByUserId(req.user.id);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
}

export const addReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const review = await reviewService.addReview(req.user.id, productId, rating, comment);
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editReview = async (req, res) => {
    try {
        const { reviewId, rating, comment } = req.body;
        const review = await reviewService.editReview(req.user.id, reviewId, rating, comment);
        res.json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        await reviewService.deleteReview(req.user.id, req.params.reviewId);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};