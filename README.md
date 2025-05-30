# Node.js CRUD Application

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and MongoDB. It contains different modules to handle products and customers. Below are the key files and their purposes.


## Key Files

### 1. `controllers/customers.controllers.js`

- **Purpose**: Handles the business logic for customer-related operations (Create, Read, Update, Delete).
- **Functions**: 
  - Handles API requests (GET, POST, PUT, DELETE).
  - Fetches or updates customer data using the `Customer` model.
  - Sends appropriate responses to the client.

### 2. `controllers/products.controllers.js`

- **Purpose**: Handles the business logic for product-related operations (Create, Read, Update, Delete).
- **Functions**:
  - Handles API requests for products.
  - Interacts with the `Product` model to fetch or update product data.
  - Responds with success or error messages based on the outcome.

### 3. `models/customers.model.js`

- **Purpose**: Defines the schema for the Customer entity using Mongoose.
- **Fields**:
  - `name`: Customer's name (required).
  - `email`: Customer's email (unique and required).
  - `phone`: Customer's phone number (required).
  - `address`: Customer's address (optional).
  - `isPremiumMember`: Boolean flag for premium membership (default: false).
- **Validation**: Ensures the correct format for email and phone fields.

### 4. `models/products.model.js`

- **Purpose**: Defines the schema for the Product entity using Mongoose.
- **Fields**:
  - `name`: Product name (required).
  - `category`: Product category (required, must match predefined values).
  - `price`: Product price (required, must be a positive number).
  - `quantityInStock`: Quantity available in stock (default: 0).
  - `discount`: Discount on product (between 0 and 100).
  - `expiryDate`: Expiry date for perishable products (only for specific categories).
  - `unit`: Unit of measurement (required, must be one of predefined options).
  - `description`: Description of the product (optional).
  
### 5. `routes/customers.route.js`

- **Purpose**: Defines the API routes for customer-related operations.
- **Methods**:
  - `GET /api/customers/`: Fetches all customers.
  - `POST /api/customers/`: Adds a new customer.
  - `PUT /api/customers/:id`: Updates a customer by ID.
  - `DELETE /api/customers/:id`: Deletes a customer by ID.
- **Functionality**:
  - Routes map to corresponding controller functions for each operation.

### 6. `routes/products.route.js`

- **Purpose**: Defines the API routes for product-related operations.
- **Methods**:
  - `GET /api/products/`: Fetches all products.
  - `POST /api/products/`: Adds a new product.
  - `PUT /api/products/:id`: Updates a product by ID.
  - `DELETE /api/products/:id`: Deletes a product by ID.
- **Functionality**:
  - Routes map to corresponding controller functions for each operation.

### 7. `index.js`

- **Purpose**: Entry point of the application.
- **Responsibilities**:
  - Sets up the Express server.
  - Imports environment variables from `.env` file using `dotenv`.
  - Connects to MongoDB using Mongoose.
  - Registers the routes for customers and products.
  - Starts the server to listen on the defined port.

### 8. `.env`

- **Purpose**: Stores environment-specific variables.
- **Variables**:
  - `MONGO`: MongoDB connection URL.
  - `PORT`: Port on which the Express server will run.
- **Usage**: This file is not tracked by Git (added to `.gitignore`) to keep sensitive data secure.

### 9. `.gitignore`

- **Purpose**: Specifies files and folders to be excluded from version control.
- **Common entries**:
  - `node_modules/`: Exclude dependencies from version control.
  - `.env`: Exclude environment variables.
  - `.vscode/`: Exclude IDE settings.
  
### 10. `package.json`

- **Purpose**: Contains project metadata and dependency information.
- **Sections**:
  - `dependencies`: Lists packages like Express, Mongoose, dotenv.
  - `scripts`: Defines commands like `start` to run the app.

---

## Summary

This project demonstrates basic CRUD operations with Node.js, Express, and MongoDB, using a clean project structure to separate concerns into models, controllers, and routes. Each file serves a specific purpose, ensuring maintainability and scalability as the project grows.

