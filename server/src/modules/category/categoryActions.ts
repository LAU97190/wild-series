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

const browseCategory: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((categorie) =>
      categorie.name
        .toLowerCase()
        .includes((req.query.q as string).toLowerCase())
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
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
  browseCategory,
  read,
  /* Here you export */
};
