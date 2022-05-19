const express = require("express");
const router = express.Router();
const upload=require('../utils/s3')
const {
  getBooks,
  createBookAd,
  addToWishList,
  updateIsSold,
  deleteaBook,
  editBook,
  recSystem
} = require("../controllers/books");
const auth = require("../middleware/auth");

router.get("/all", getBooks);
router.post("/add", auth,upload.single('selectedFile'), createBookAd);
router.patch("/:id/addWishList", auth, addToWishList);
router.patch("/:id/sold", auth, updateIsSold);
router.delete("/:id", auth, deleteaBook);
router.patch("/:id", auth, editBook);
router.get('/rec-system',recSystem)

module.exports = router;
