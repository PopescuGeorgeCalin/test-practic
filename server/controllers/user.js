import User from "../models/user";

export default {
  findAll: function (req, res) {
    User.findAll(function (err, data) {
      if (err) res.send(err);
      res.send(data);
    });
  },

  create: function (req, res) {
    const new_user = new User(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ error: true, message: "Please provide all required field" });
    } else {
      User.create(new_user, function (err, data) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "User added successfully!",
          data: data,
        });
      });
    }
  },
}
