/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let count = 0;
  let board = new Array(n).fill([]).map((e) => new Array(n).fill(false));

  const isValid = (board, row, col) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col]) return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j]) return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j]) return false;
    }
    return true;
  };

  const backTrace = (board, row) => {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue;

      board[row][col] = true;
      backTrace(board, row + 1);
      board[row][col] = false;
    }
  };

  backTrace(board, 0);
  return count;
};
// @lc code=end
