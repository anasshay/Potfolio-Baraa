var express = require("express");
var router = express.Router();
var controller = require("../controller/about-me");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const AboutMe = require("../models/about-me");


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

const upload = multer({ storage })

router.post('/upload', upload.single('photo'), (req,res) =>{
    const filePath = req.file.path;
    let data = {
      image : filePath
    }
    console.log(data);
    AboutMe.find({}, (err, response) => {
      let aboutMeId = response[0]._id;
    AboutMe.updateOne({_id: aboutMeId}, {
      $set: data
    }, (err, response2) => {
      if (err) return next(err)
      res.status(200).send({ success: true, response2 })
    }
    )
  })
})

router.get("/", controller.get);
router.post("/", controller.post);
router.put("/", controller.edit);
// router.delete ('/', controller.delete);

module.exports = router;
