// const httpStatus = require('http-status');
const { Board } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Board>}
 */
const createBoard = async (boardBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return Board.create(boardBody);
};

module.exports = {
  createBoard,
};
