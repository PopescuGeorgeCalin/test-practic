import dbConn from "../config/db.config";

class User {
  constructor(user) {
    this.email = user.email;
    this.yob = user.yob;
  }

  static create(newEmp, cb) {
    dbConn.query("INSERT INTO Users SET ?", newEmp, function (err, res) {
      if (err) {
        console.log("error: ", err);
        cb(err, null);
      } else {
        console.log(res.insertId);
        cb(null, res.insertId);
      }
    });
  }

  static findAll(cb) {
	dbConn.query("SELECT * FROM Users", function (err, res) {
	  if (err) {
		console.log("error: ", err);
		cb(err, null);
	  } else {
		console.log("users : ", res);
		cb(null, res);
	  }
	});
  };
}

export default User
