const express = require("express");
const router = express.Router();
const wiki = require("../controllers/controller");

router
  .route("/articles")
  .get(wiki.GetAllArticles)
  .post(wiki.PostArticles)
  .delete(wiki.DeleteAllArticles);

router
  .route("/articles/:articleTitle")
  .get(wiki.GetArticle)
  .patch(wiki.UpdateArticle)
  .delete(wiki.DeleteArticle);

module.exports = router;
