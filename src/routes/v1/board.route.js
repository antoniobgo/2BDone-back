const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const boardValidation = require('../../validations/board.validation');
const boardController = require('../../controllers/board.controller');

const router = express.Router();

// TODO: use validations
router
  .route('/')
  .get(auth(), boardController.getBoards)
  .post(auth(), validate(boardValidation.createBoard), boardController.createBoard);
//   .post(auth(), validate(boardValidation.createBoard), boardController.createBoard);
// router
//   .route('/:boardId')
//   .patch(auth(), validate(boardValidation.updateBoard), boardController.updateBoard)
//   .delete(auth('manageUsers'), validate(boardValidation.deleteBoard), boardController.deleteUser);

// .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
// .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:boardId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
