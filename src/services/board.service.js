// const httpStatus = require('http-status');
const { Board, User } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create a board
 * @param {Object} boardBody
 * @returns {Promise<Board>}
 */
const createBoard = async (boardBody) => {
  const board = boardBody;
  const createdBoard = await Board.create(board);

  await User.findByIdAndUpdate(boardBody.user, {
    $push: { boards: createdBoard },
  });
  return createdBoard;
};

const getBoards = async (userId) => {
  return Board.find({ user: userId });
};

module.exports = {
  createBoard,
  getBoards,
};
