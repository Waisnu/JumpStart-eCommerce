import mongoose from "mongoose";
import dontenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dontenv.config();

connectDB();

const importData = async () => {
    try {
        // clear out all the collections
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
    
        // insert users into the database
        const createdUsers = await User.insertMany(users);
    
        // get the admin user
        const adminUser = createdUsers[0]._id;
    
        // add the admin user to each product
        const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
        });
    
        // insert products into the database
        await Product.insertMany(sampleProducts);
    
        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
    }

    const destroyData = async () => {


        try {
            // clear out all the collections
            await Order.deleteMany();
            await Product.deleteMany();
            await User.deleteMany();
        
            console.log("Data Destroyed!".red.inverse);
            process.exit();
        } catch (error) {
            console.error(`${error}`.red.inverse);
            process.exit(1);
        }
    }

    if (process.argv[2] === "-d") {
        destroyData();
    }
    else {
        importData();
    }






