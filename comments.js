// Create web server to handle comments
// ------------------------------------------------

// Import modules
var express = require("express");
var router = express.Router();
var db = require("../models");

// Routes
// ------------------------------------------------

// POST route for saving a new comment
router.post("/api/comments", function(req, res) {
  db.Comment.create({
    text: req.body.text,
    UserId: req.body.UserId,
    PostId: req.body.PostId
  })
    .then(function(dbComment) {
      res.json(dbComment);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// GET route for getting all comments
router.get("/api/comments", function(req, res) {
  db.Comment.findAll({})
    .then(function(dbComment) {
      res.json(dbComment);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// DELETE route for deleting a comment
router.delete("/api/comments/:id", function(req, res) {
  db.Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbComment) {
      res.json(dbComment);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// PUT route for updating a comment
router.put("/api/comments", function(req, res) {
  db.Comment.update(req.body, {
    where: {
      id: req.body.id
    }
  })
    .then(function(dbComment) {
      res.json(dbComment);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Export routes
module.exports = router;