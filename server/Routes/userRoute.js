const express = require("express");
const router = express.Router();
const {registerUser, loginUser, findUser, getUsers, updateUser, deleteUser, updateLike, identityUpdate} = require("../Controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.post("/update", updateUser);
router.post("/identityUpdate", identityUpdate);
router.delete("/unregister", deleteUser);
router.post("/updateLike", updateLike);
router.get("/", getUsers);

module.exports = router;
