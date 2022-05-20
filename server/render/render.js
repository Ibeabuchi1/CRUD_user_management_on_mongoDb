const axios = require("axios");
const { response } = require("express");

const home = (req, res) => {
  // make a get request to the API
  axios
    .get("http://localhost:4000/api/v1/mgt")
    .then((response) => {
      res.render("index", { users: response.data });
      console.log(response.data);
    })
    .catch((error) => {
      res.send(`Axios error: ${error.message}`);
    });
};
const users = (req, res) => {
  res.render("user");
};
const update = (req, res) => {
  const id = req.query.id;
  axios
    .get("http://localhost:4000/api/v1/mgt", { params: { id: id } })
    .then((userData) => {
      res.render("update-user", { users: userData.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  home,
  users,
  update,
};
