const booksRouter = require("express").Router();
const Book = require("../models/book");
const jwt = require("jsonwebtoken");
const middleware = require("../utils/middleware");

// GET ALL BLOGS
booksRouter.get("/", async (request, response) => {
  const books = await Book.find({}).populate("user", { username: 1, name: 1 });
  response.json(books);
});

// GET SINGLE BLOG
booksRouter.get("/:id", async (request, response) => {
  const book = await Book.findById(request.params.id);
  if (book) {
    response.json(book);
  } else {
    response.status(404).end();
  }
});

// ADD NEW BLOG
booksRouter.post("/", middleware.userExtractor, async (request, response) => {
  const body = request.body;
  const user = request.user;

  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const book = new Book({
    title: body.title,
    author: body.author,
    url: body.url,
    stars: body.stars | 0,
    picture: body.picture,
    user: user.id,
  });

  const savedBook = await book.save();
  user.books = user.books.concat(savedBook.id);
  await user.save();

  const populatedBook = await savedBook
    .populate("user", { username: 1, name: 1 })
    .execPopulate();

  response.status(200).json(populatedBook.toJSON());
});

// DELETE A BLOG
booksRouter.delete(
  "/:id",
  middleware.userExtractor,
  async (request, response) => {
    const book = await Book.findById(request.params.id);
    const user = request.user;

    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    if (book.user.toString() === user.id.toString()) {
      await Book.findByIdAndRemove(request.params.id);
      response.status(204).end();
    } else {
      return response.status(401).json({
        error: "you do not have permission to delete this book",
      });
    }
  }
);

// UPDATE A BLOG
booksRouter.put("/:id", async (request, response) => {
  const body = request.body;

  const book = {
    title: body.title,
    author: body.author,
    url: body.url,
    stars: body.stars,
    picture: body.picture,
  };

  const updatedBook = await Book.findByIdAndUpdate(request.params.id, book, {
    new: true,
    runValidators: true,
    context: "query",
  });

  if (updatedBook) {
    response.json(updatedBook);
  } else {
    return response.status(404).end();
  }
});

module.exports = booksRouter;
