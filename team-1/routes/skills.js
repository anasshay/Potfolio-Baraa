var express = require("express");
var router = express.Router();
var controller = require("../controller/skills");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

const multer = require("multer");
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

router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.post("/", upload.single("photo"), controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
