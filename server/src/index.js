import "dotenv/config";

import mysql from "mysql2/promise";

// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

class CategoryRepository {
  /* ... */
}

const accessData = async () => {
  try {
    const categoryRepository = new CategoryRepository();

    const categories = await categoryRepository.readAll();

    categoryRepository.close();

    console.info(categories);
  } catch (err) {
    console.error("Error accessing the database:", err.message, err.stack);
  }
};
// Run the accessData function
accessData();
