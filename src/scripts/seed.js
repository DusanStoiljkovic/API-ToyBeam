import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

dotenv.config();

/* ===================== CATEGORIES ===================== */
const categories = [
  {
    name: "board_game",
    label: "Board Games",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/board_game.png"
  },
  {
    name: "blocks",
    label: "Building Blocks",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/lego.png"
  },
  {
    name: "puzzle",
    label: "Puzzles",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/coloring.png"
  },
  {
    name: "doll",
    label: "Dolls",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/char3.png"
  },
  {
    name: "plush",
    label: "Plush Toys",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/teddy.png"
  },
  {
    name: "creative",
    label: "Creative Kits",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/coloring3.png"
  },
  {
    name: "toy",
    label: "Toys",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/toy.png"
  },
  {
    name: "vehicle",
    label: "Vehicles",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/vehicle.png"
  },
  {
    name: "robot",
    label: "Robots & Figures",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/categories/char2.png"
  }
];

/* ===================== PRODUCTS ===================== */
const products = [
  {
    name: "Junior Monopoly Board Game",
    categoryName: "board_game",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/board_game.png",
    ageRange: "5-10",
    target: "all",
    price: 24.99,
    description: "A fun and family-friendly board game for kids."
  },
  {
    name: "Family Board Game Set",
    categoryName: "board_game",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/board_game2.png",
    ageRange: "6-12",
    target: "all",
    price: 34.99,
    description: "A complete board game set for family game nights."
  },

  /* ROBOTS & FIGURES */
  {
    name: "Superhero Action Figure",
    categoryName: "robot",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/char.png",
    ageRange: "4-9",
    target: "all",
    price: 14.99,
    description: "A durable superhero action figure for imaginative play."
  },
  {
    name: "Dinosaur T-Rex Figure",
    categoryName: "robot",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/char2.png",
    ageRange: "5-12",
    target: "all",
    price: 19.99,
    description: "A realistic dinosaur figure with detailed design."
  },

  /* DOLLS */
  {
    name: "Princess Fashion Doll",
    categoryName: "doll",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/char3.png",
    ageRange: "3-8",
    target: "girl",
    price: 22.99,
    description: "A beautiful princess doll with elegant outfit."
  },

  /* CREATIVE / COLORING */
  {
    name: "Animal Coloring Book",
    categoryName: "creative",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/coloring.png",
    ageRange: "3-7",
    target: "all",
    price: 9.99,
    description: "A coloring book with animal illustrations for kids."
  },
  {
    name: "Creative Coloring Kit",
    categoryName: "creative",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/coloring2.png",
    ageRange: "4-10",
    target: "all",
    price: 17.99,
    description: "A complete coloring kit with crayons and activities."
  },
  {
    name: "Educational Coloring Book",
    categoryName: "creative",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/coloring3.png",
    ageRange: "4-8",
    target: "all",
    price: 12.99,
    description: "An educational coloring book for motor skill development."
  },
  {
    name: "Numbers Adventure Book",
    categoryName: "creative",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/coloring4.png",
    ageRange: "4-9",
    target: "all",
    price: 11.99,
    description: "A fun book that teaches numbers through play."
  },
  {
    name: "Creative Art Activity Set",
    categoryName: "creative",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/coloring5.png",
    ageRange: "5-12",
    target: "all",
    price: 21.99,
    description: "A large creative art set for kids."
  },

  /* BLOCKS */
  {
    name: "Classic LEGO Blocks Box",
    categoryName: "blocks",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/lego.png",
    ageRange: "4-10",
    target: "all",
    price: 49.99,
    description: "A classic LEGO box for endless creativity."
  },
  {
    name: "LEGO City Construction Set",
    categoryName: "blocks",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/lego2.png",
    ageRange: "6-12",
    target: "all",
    price: 69.99,
    description: "A detailed LEGO city construction set."
  },
  {
    name: "LEGO Creative Town",
    categoryName: "blocks",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/lego3.png",
    ageRange: "5-10",
    target: "all",
    price: 59.99,
    description: "A creative LEGO town building set."
  },

  /* PUZZLES */
  {
    name: "Wooden Animal Puzzle",
    categoryName: "puzzle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/puzzle.png",
    ageRange: "3-6",
    target: "all",
    price: 14.99,
    description: "A wooden puzzle featuring animals."
  },
  {
    name: "Alphabet Puzzle Board",
    categoryName: "puzzle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/puzzle2.png",
    ageRange: "3-6",
    target: "all",
    price: 13.99,
    description: "An alphabet puzzle for early learning."
  },
  {
    name: "Vehicle Puzzle Set",
    categoryName: "puzzle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/puzzle3.png",
    ageRange: "4-7",
    target: "all",
    price: 15.99,
    description: "A vehicle-themed puzzle set."
  },
  {
    name: "Learning Shapes Puzzle",
    categoryName: "puzzle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/puzzle4.png",
    ageRange: "3-6",
    target: "all",
    price: 14.49,
    description: "A shapes puzzle designed for kids."
  },

  /* PLUSH */
  {
    name: "Plush Teddy Bear",
    categoryName: "plush",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/teddy.png",
    ageRange: "2-6",
    target: "all",
    price: 18.99,
    description: "A soft and cuddly teddy bear."
  },
  {
    name: "Rainbow Plush Unicorn",
    categoryName: "plush",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/teddy2.png",
    ageRange: "2-7",
    target: "all",
    price: 21.99,
    description: "A colorful plush unicorn."
  },
  {
    name: "Cute Plush Cat",
    categoryName: "plush",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/teddy3.png",
    ageRange: "2-6",
    target: "all",
    price: 19.99,
    description: "A cute plush cat toy."
  },

  /* TOYS */
  {
    name: "Musical Toy Drum",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy.png",
    ageRange: "2-5",
    target: "all",
    price: 26.99,
    description: "A musical toy drum with lights and sounds."
  },
  {
    name: "Interactive Learning Globe",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy2.png",
    ageRange: "4-9",
    target: "all",
    price: 29.99,
    description: "An interactive globe for kids."
  },
  {
    name: "Color Craft Creative Set",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy3.png",
    ageRange: "4-10",
    target: "all",
    price: 24.99,
    description: "A colorful creative craft set."
  },
  {
    name: "Kids Learning Piano",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy4.png",
    ageRange: "3-7",
    target: "all",
    price: 34.99,
    description: "A learning piano toy for kids."
  },
  {
    name: "Interactive Learning Toy",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy5.png",
    ageRange: "3-6",
    target: "all",
    price: 22.99,
    description: "An interactive educational toy."
  },
  {
    name: "Wooden Clock Learning Toy",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy6.png",
    ageRange: "4-8",
    target: "all",
    price: 19.99,
    description: "A wooden clock toy for learning time."
  },
  {
    name: "Educational Tablet Toy",
    categoryName: "toy",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/toy7.png",
    ageRange: "4-9",
    target: "all",
    price: 27.99,
    description: "An educational tablet toy."
  },

  /* VEHICLES */
  {
    name: "Fire Truck Toy Vehicle",
    categoryName: "vehicle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/vehicle.png",
    ageRange: "3-8",
    target: "all",
    price: 24.99,
    description: "A fire truck toy with realistic details."
  },
  {
    name: "Construction Truck Vehicle",
    categoryName: "vehicle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/vehicle2.png",
    ageRange: "3-8",
    target: "all",
    price: 21.99,
    description: "A construction truck for imaginative play."
  },
  {
    name: "Sports Car Toy Vehicle",
    categoryName: "vehicle",
    image: "https://pub-24488fcd6d8347058e4892fc94215f70.r2.dev/toys/vehicle3.png",
    ageRange: "4-9",
    target: "all",
    price: 29.99,
    description: "A sports car toy for racing fun."
  }
];

/* ===================== SEED FUNCTION ===================== */
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("🧹 Cleaning database...");
    await Category.deleteMany();
    await Product.deleteMany();
    
    console.log("📦 Inserting categories...");
    const createdCategories = await Category.insertMany(categories);

    // map: category.name → category._id
    const categoryMap = {};
    createdCategories.forEach(cat => {
      categoryMap[cat.name] = cat._id;
    });

    console.log("🧸 Inserting products...");
    const productsWithCategoryIds = products.map(product => ({
      ...product,
      category: categoryMap[product.categoryName]
    }));

    // uklanjamo pomoćno polje
    productsWithCategoryIds.forEach(p => delete p.categoryName);

    await Product.insertMany(productsWithCategoryIds);

    console.log("✅ Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedDatabase();


