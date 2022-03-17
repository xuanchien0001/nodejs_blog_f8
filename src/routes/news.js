const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/detail1", newsController.detail1);
router.use("/", newsController.news);

module.exports = router;
