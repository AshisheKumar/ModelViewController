const express = require('express');
const router = express.Router();
const {handleGetAllUsers, handleGetUsersById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser} = require('../controllers/user');


router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);



router
.route("/:id")
.get(handleGetUsersById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;