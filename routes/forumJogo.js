const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const usuario = req.session.usuario;

  res.render("forumJogo", { usuario });
});

module.exports = router;
