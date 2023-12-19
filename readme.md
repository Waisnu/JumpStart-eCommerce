<p align="center">
  <img src="logo-readme.png" alt="JumpStart eCommerce" width="300">
</p>

# JumpStart eCommerce Platform  🚀

> Welcome to JumpStart, an eCommerce platform built with the MERN stack & Redux, primarily designed to deliver a seamless and customer-centric shopping experience. Start selling and managing your products effortlessly!
>
# LIVE DEMO : https://jumpstarts.live 👈 
> ( ⚠️ ❗ For some reasons the order pay status doesn't update to paid after paying from paypal sandbox, because it is in production, run the code in development mode to make it work  )

## 🌟 Customer-Centric Shopping Experience

JumpStart is not just another eCommerce platform; it's your gateway to providing a top-notch, customer-centric shopping experience. Here's why JumpStart stands out:

- ✔️ **Full-featured shopping cart:** A feature-rich shopping cart that makes adding, reviewing, and purchasing products a breeze for your customers.

- ✔️ **Product reviews and ratings:** Allow your customers to provide valuable feedback and ratings for your products, fostering trust and transparency.

- ✔️ **Top products carousel:** Highlight your top-selling products with an eye-catching carousel to catch your customers' attention.

- ✔️ **Product pagination:** Easy navigation through your product catalog, ensuring your customers can find what they're looking for quickly.

- ✔️ **Product search feature:** A powerful search function to help customers find specific products with ease.

- ✔️ **User profiles with order history:** Empower your customers with user profiles, enabling them to view their order history, making shopping with you a personalized experience.

## 🔥 Features

JumpStart is packed with even more features to help you manage your online store effectively:

- ✔️ **Admin product management:** A comprehensive toolset for managing your product inventory and content.

- ✔️**Admin user management:** Efficiently manage your customer base and access crucial user-related information.

- ✔️ **Admin Order details page:** Dive deep into order details, ensuring smooth order fulfillment.

- ✔️ **Mark orders as delivered option:** Streamline the order processing workflow with a built-in delivery tracking system.

- ✔️ **Checkout process (shipping, payment method, etc):** A secure and efficient checkout process that minimizes cart abandonment.

- ✔️**PayPal / credit card integration:** Accept payments conveniently with PayPal and credit card integration.

- ✔️ **Database seeder (products & users):** Easily populate your database with sample users and products for testing and development.

## 🚀 Getting Started

To get started with JumpStart, follow these steps:

### 1. Set Up Your Environment

Rename the `.env.example` file to `.env` and add the following configuration:

```env
NODE_ENV = development
PORT = 5000
MONGO_URI = your-mongodb-uri
JWT_SECRET = 'your-secret-key'
PAYPAL_CLIENT_ID = your-paypal-client-id
PAGINATION_LIMIT = 8

```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create production build to deploy
cd ( to the root folder of the project, outside the frontend folder to be exact.)
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
#Edit data from the backend/products.js

# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@jumpstart.com (Admin)
admin


demo@jumpstart.com (Customer)
demo
```

---

