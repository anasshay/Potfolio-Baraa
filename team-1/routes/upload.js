const express = require("express");
const multer = require("multer");
var router = express.Router();
const path = require("path");
const fs = require("fs");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// add image
router.post("/", upload.single("photo"), function (req, res) {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});



// delete image
router.delete("/delete", function (req, res) {
  let id = req.body.id;
  try {
    fs.unlinkSync("./images" + id);
    res.send("img is deleted");
  } catch (err) {
    res.send(err);
  }  
});

module.exports = router;
