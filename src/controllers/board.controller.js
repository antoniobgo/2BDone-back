// const httpStatus = require('http-status');
// const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { boardService } = require('../services');

// const createBoard = catchAsync(async (req, res) => {
// const board = await boardService.createBoard(req.body);
// res.status(httpStatus.CREATED).send(board);
// });

const createBoard = catchAsync(async (req, res) => {
  const board = await boardService.createBoard(req.body);
  res.send(board);
});

const getBoards = catchAsync(async (req, res) => {
  const boards = await boardService.getBoards(req.query.userId);
  res.send(boards);
});

// const getUsers = catchAsync(async (req, res) => {
//   const filter = pick(req.query, ['name', 'role']);
//   const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   const result = await userService.queryUsers(filter, options);
//   res.send(result);
// });

// const getUser = catchAsync(async (req, res) => {
//   const user = await userService.getUserById(req.params.userId);
//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//   }
//   res.send(user);
// });

// const updateUser = catchAsync(async (req, res) => {
//   const user = await userService.updateUserById(req.params.userId, req.body);
//   res.send(user);
// });

// const deleteUser = catchAsync(async (req, res) => {
//   await userService.deleteUserById(req.params.userId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

module.exports = {
  createBoard,
  getBoards,
  //   getUsers,
  //   getUser,
  //   updateUser,
  //   deleteUser,
};
