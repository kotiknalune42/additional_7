module.exports = function solveSudoku(matrix) {
    let solvedSukodu = [], len = matrix.length;

    for (let horizontal = 0; horizontal < len; horizontal++) {
      for (let vertical = 0; vertical < len; vertical++) {
        solvedSukodu.push(matrix[horizontal][vertical]);
      }
    }
  
    function checker(number, row, column) {
      for (let i = 0; i < 9; i++) {
        let third = ((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(column / 3) * 3) + (i % 3);
        if (number == solvedSukodu[(row * 9) + i] || number == solvedSukodu[column + (i * 9)] || number == solvedSukodu[third]) {
          return false;
        }
      }
      return true;
    }
  
    function getter(index) {
      if (index >= solvedSukodu.length) {
        return true;
      } else if (solvedSukodu[index] != 0) {
        return getter(index + 1);
      }
      
      for (let i = 1; i <= 9; i++) {
        if (checker(i, Math.floor(index / 9), index % 9)) {
          solvedSukodu[index] = i;
          if (getter(index + 1)) {
            return true;
          }
        }
      }
      solvedSukodu[index] = 0;
      return false;
    }
  
    function cluster(array) {
      let result = [];
      for (let i = 0; i < array.length; i += 9) {
      		result.push(array.slice(i, i + 9));
      }
      return result;
    }
    return !getter(0) ? 'These are not the numbers you-re looking for...' : cluster(solvedSukodu);
  }
