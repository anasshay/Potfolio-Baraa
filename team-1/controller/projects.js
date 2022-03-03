const Projects = require("../models/projects");

class Controller {
  // callback functions used in routes
  getAll(req, res, next) {
    Projects.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  get(req, res, next) {
    let { id } = req.params;
    Projects.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  post(req, res, next) {
    let body = req.body;
    let content = new Projects(body);
    content.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Projects.updateOne(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
      }
    );
  }
  delete(req, res, next) {
    let { id } = req.params;
    Projects.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
}

const controller = new Controller();
module.exports = controller;
