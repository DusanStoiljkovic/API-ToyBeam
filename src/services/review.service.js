import Review from '../models/Review.js';

class ReviewService {
    static async getReviewsByProductId(productId) {
        const reviews = await Review.find({ productId }).populate('userId');
        if(!reviews) {
            throw new Error("No reviews found for this product");
        }
        return reviews;
    }

    static async getReviewsByUserId(userId) {
        const reviews = await Review.find({ userId }).populate('productId');
        if(!reviews) {
            throw new Error("No reviews found for this user");
        }
        return reviews;
    }

    static async addReview(userId, productId, rating, comment) {
        const existingReview = await Review.findOne({userId, productId});
        
        if(existingReview) {
            throw new Error("User have already reviewed product.");
        }

        const review = new Review({
            userId: userId,
            productId: productId,
            comment: comment,
            rating: rating
        });

        await review.save();
        return review;
    }

    static async editReview(userId, reviewId, rating, comment) {
        const review = await Review.findOne({ _id: reviewId, userId: userId });
        if (!review) {
            throw new Error("Review not found or unauthorized");
        }
        review.rating = rating;
        review.comment = comment;
        await review.save();
        return review;
    }

    static async deleteReview(userId, reviewId) {
        const review = await Review.findOneAndDelete({ _id: reviewId, userId: userId });
        if (!review) {
            throw new Error("Review not found or unauthorized");
        }
        return;
    }
}

export default ReviewService;