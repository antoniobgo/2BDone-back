const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const boardController = require('../../controllers/board.controller');

const router = express.Router();

// router.route('/:userId/my-boards').post(boardController.createBoard);
router.route('/').get(boardController.getBoards).post(boardController.createBoard);
// .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
// .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:boardId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
