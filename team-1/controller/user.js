const User = require("../models/user");

class Controller {
  // callback functions used in routes
  get(req, res, next) {
    User.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  post(req, res, next) {
    let content = req.body;
    let newContent = new User(content);
    newContent.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  edit(req, res, next) {
    let content = req.body;
    User.find({}, (err, response) => {
      let userId = response[0]._id;
    User.updateOne({_id: userId}, {
      $set: content
    }, (err, response2) => {
      if (err) return next(err)
      res.status(200).send({ success: true, response2 })
    }
    )
  })
  }
}

const controller = new Controller();
module.exports = controller;
