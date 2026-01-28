🛒 E-Commerce Backend API

Node.js • Express • MongoDB • JWT

Production-ready REST API for an e-commerce application built with Node.js, Express, and MongoDB (Mongoose).
The project follows a clean service–controller architecture and demonstrates real-world backend patterns used in professional environments.

🎯 Built as a portfolio project to showcase backend development skills for junior/mid backend roles.

🚀 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

RESTful API

MVC-inspired architecture

Postman / REST Client testing

🧱 Project Architecture
src/
├── controllers/    # HTTP layer (req / res)
├── services/       # Business logic
├── models/         # Mongoose schemas
├── routes/         # API routes
├── middleware/     # Auth & validation
├── config/         # Database & environment config
└── app.js


Architecture principles

Controllers handle HTTP requests and responses only

Services contain all business logic

Models define database structure

Clean separation of concerns

🔐 Authentication (JWT)

Authentication is handled using JSON Web Tokens.

Endpoints
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login and receive JWT token

JWT is required for all cart and review operations.

🧸 Products API
Endpoints
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get product by ID
GET	/products/search	Search products
PUT	/products/:id	Edit a product
GET	/categories	Get all categories
Search supports

name (case-insensitive)

category

price range

target group / age range

🛒 Cart API

Each authenticated user has one cart, created automatically when needed.

Endpoints
Method	Endpoint	Description
GET	/cart	Get current user cart
POST	/cart/add	Add product to cart
PATCH	/cart/edit	Edit product quantity
DELETE	/cart/remove	Remove product from cart
Cart behavior

Adding the same product increases quantity

Setting quantity = 0 removes the product

Total price is calculated safely

Products are referenced using MongoDB ObjectIds

✍️ Reviews API

Users can leave reviews for products.

Endpoints
Method	Endpoint	Description
GET	/reviews/product/:productId	Get reviews by product
GET	/reviews/user/:userId	Get reviews by user
POST	/reviews	Add a review
PUT	/reviews/:reviewId	Edit a review
DELETE	/reviews/:reviewId	Delete a review

Authorization ensures users can only modify their own reviews.

🧠 Key Backend Concepts Demonstrated

RESTful API design

JWT authentication & authorization

MongoDB relations (ref, populate)

Cart logic with quantity handling

Defensive coding & validation

Service-layer architecture

Clean and maintainable backend structure

⚙️ Setup & Run Locally
git clone https://github.com/your-username/your-repo-name.git
cd backend
npm install
npm run dev


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🧪 API Testing

All endpoints were tested using:

Postman

REST Client (VS Code)

📌 Future Improvements

Orders & checkout system

Payment integration

Admin panel

Role-based access control

Pagination and filtering

Swagger / OpenAPI documentation

👤 Author

Dušan Stoiljković
Backend / Full-Stack Developer
📍 Serbia — Open to Remote

Portfolio: https://www.dusanstoiljkovic.com

GitHub: https://github.com/DusanStoiljkovic

LinkedIn: https://www.linkedin.com/in/dusan-stoiljkovic-508a51235/
