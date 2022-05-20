const res = require("express/lib/response");
const userModel = require("../model/Model");

//// create a post request
const createNew = (req, res) => {
  //// validate request
  if (!req.body) {
    req.status(404).send({ message: "Fill all fields" });
    return;
  } //// new user
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  ////save user to database
  user
    .save(user)
    .then((data) => res.redirect("/"))
    .catch((error) =>
      res
        .status(500)
        .send(error.message || { message: "Error creating new user" })
    );
};
//// get users from database
const getall = (req, res) => {
  const id = req.query.id;
  if (id) {
    userModel
      .findById(id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: "User data not found" });
        } else {
          res.send(user);
          console.log(user);
        }
      })
      .catch((error) => {
        res.status(500).send(
          error.message || {
            message: "Error occured retrievig User data" + id,
          }
        );
      });
  } else {
    userModel.find((err, result) => {
      if (err) {
        res.status(404).send({ message: "Error retrieving Data" });
      }
      res.send(result);
      console.log("Done");
    });
  }
};
// get one user from database by id
// const getone = (req, res) => {
// const id = req.params.id;
// userModel
//   .findById(id)
//   .then((user) => {
//     if (!user) {
//       res.status(404).send({ message: "User data not found" });
//     } else {
//       res.send(user);
//       console.log(user);
//     }
//   })
//   .catch((error) => {
//     res
//       .status(500)
//       .send(
//         error.message || { message: "Error occured retrievig User data" + id }
//       );
//   });
// };
// update user in the database
const updateUser = (req, res) => {
  const id = req.params.id;
  if (!req.body) {
    res.status(404).send({ message: `User with ${id} not found` });
  }
  userModel
    .findByIdAndUpdate(id, req.body)
    .then((user) => {
      if (!user) {
        req.status(404).send({ message: "Cannot update user with" + id });
      } else {
        res.send(user);
        console.log(user);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send(error.message || { message: "Error occured updating user" });
    });
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndDelete(id).then((user) => {
    if (!user) {
      res.status(404).send({ message: `User with ${id} not found` });
    } else {
      res.send({ message: "Successfully deleted" });
    }
  });
};

module.exports = {
  createNew,
  getall,
  //   getone,
  updateUser,
  deleteUser,
};
