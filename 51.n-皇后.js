/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return { }
 */
var solveNQueens = function (n) {
  let res = [];
  const board = new Array(n).fill([]).map(() => new Array(n).fill("."));

  const valid = (board, row, col) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  };

  const backTrace = (board, row) => {
    if (row === n) {
      let result = [...board.map((e) => e.join(""))];
      res.push(result);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!valid(board, row, col)) {
        continue;
      }

      board[row][col] = "Q";
      backTrace(board, row + 1);
      board[row][col] = ".";
    }
  };

  backTrace(board, 0);
  return res;
};
// @lc code=end
