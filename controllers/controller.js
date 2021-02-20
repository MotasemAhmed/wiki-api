const Article = require("../models/article");
const { update } = require("d:/iti/njs/server/controllers/todo-ctrl");

exports.GetAllArticles = (req, res) => {
  Article.find({}, (err, foundArticles) => {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
};

exports.PostArticles = (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
  });
  article.save((err) => {
    if (!err) {
      res.send("Successfully Added");
    } else {
      res.send(err);
    }
  });
};

exports.DeleteAllArticles = (req, res) => {
  Article.deleteMany((err) => {
    if (!err) {
      res.send("Deleted All");
    } else {
      res.send(err);
    }
  });
};

exports.GetArticle = (req, res) => {
  Article.findOne({ title: req.params.articleTitle }, (err, found) => {
    if (err) {
      res.send(err);
    } else if (!found) {
      res.send("Not Found!");
    } else {
      res.send(found);
    }
  });
};

exports.UpdateArticle = (req, res) => {
  Article.findOneAndUpdate(
    { title: req.params.articleTitle },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.send("Successfully Updated");
      } else {
        res.send(err);
      }
    }
  );
};

exports.DeleteArticle = (req, res) => {
  Article.findOneAndRemove({ title: req.params.articleTitle }, (err) => {
    if (!err) {
      res.send("Successfully Deleted");
    } else {
      res.send(err);
    }
  });
};
