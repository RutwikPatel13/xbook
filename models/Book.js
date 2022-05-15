const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ownerName: {
    type: String,
    required: true,
  },
  wishListedBy: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
  ],
  isSold: {
    type: Boolean,
    default: false,
  },
  bookName: {
    //name of book
    type: String,
    required: true,
  },
  subject: {
    //subject -> Engineering subject
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  price: {
    //price of the book
    type: Number,
    required: true,
  },
  condition: {
    //condition of the book ->New or Used
    type: String,
    required: true,
  },
  priceType: {
    //nogotitiable->Fixed, Negotiable, Price on call, Don
    type: String,
    required: true,
  },
  mrp: {
    //MRP of book
    type: Number,
    required: true,
  },
  selectedFile: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  tags: [String], //tags for book
  noOfPages: {
    //no of pages in the book
    type: Number,
    required: true,
  },
  edition: {
    //edition of the book
    type: String,
    required: true,
  },
  description: String, //description of the book
  createdAt: {
    //created At
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    //created At
    type: Date,
    default: Date.now(),
  },
  edition_year: {
    //edition_year of the book
    type: String,
    required: true,
  },
  publisher: {
    //publisher of the book
    type: String,
    required: true,
  },
  semester: {
    //semester of the book
    type: String,
    required: true,
  },
  first_use: {
    //first_use of the book
    type: String,
    required: true,
  },
  isbn: {
    //isbn of the book
    type: String,
    required: true,
  },
  university: {
    //university of the book
    type: String,
    required: true,
  },
  Cover2: {
    //Cover2 of the book
    type: String,
    required: false,
  },
  Page1: {
    //Page1 of the book
    type: String,
    required: false,
  },
  Page2: {
    //Page2 of the book
    type: String,
    required: false,
  },
  course: {
    //course of the book
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book1", BookSchema);

module.exports = Book;
/*


*/