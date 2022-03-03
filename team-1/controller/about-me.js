const AboutMe = require("../models/about-me");

class Controller {
  // callback functions used in routes
  get(req, res, next) {
    AboutMe.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  post(req, res, next) {
    let content = req.body;
    let newContent = new AboutMe(content);
    newContent.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  edit(req, res, next) {
    let content = req.body;
    AboutMe.find({}, (err, response) => {
      let aboutMeId = response[0]._id;
    AboutMe.updateOne({_id: aboutMeId}, {
      $set: content
    }, (err, response2) => {
      if (err) return next(err)
      res.status(200).send({ success: true, response2 })
    }
    )
  })
  }

  // edit(req, res, next) {
  //   res.send(req.body)
  // }

}

const controller = new Controller();
module.exports = controller;
