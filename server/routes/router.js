const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const render = require("../render/render");
const dbModel = require("../controller/controls");

/** 
 @description Home Route
 @method GET
*/
router.get("/", render.home);
/** 
 @description New User Route
 @method GET New User
*/
router.get("/add-user", render.users);
/** 
 @description Update User Route
 @method GET Update User
*/
router.get("/update-user", render.update);

////API
//// Post request (CREATE)
router.post("/api/v1/mgt", dbModel.createNew);

//// Get All (READ)
router.get("/api/v1/mgt", dbModel.getall);

////getOne (READ ONE USER BY ID )
// router.get("/api/v1/mgt/:id", dbModel.getone);

//// update user (UPDATE)
router.put("/api/v1/mgt/:id", dbModel.updateUser);

//// update user (DELETE)
router.delete("/api/v1/mgt/:id", dbModel.deleteUser);

module.exports = router;
