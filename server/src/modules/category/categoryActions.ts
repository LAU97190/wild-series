// Import access to data
import categoryRepository from "./categoryRepository";

// Some data to make the trick

export const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parsedIdCategory = Number.parseInt(req.params.id);

  const categorie = categories.find((c) => c.id === parsedIdCategory);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};
export default {
  browse,
  read,
  /* Here you export */
};
