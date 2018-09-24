module.exports = function solveSudoku(matrix) {

    var matrixNew = [];

        for (i=0; i<matrix.length; i++){
            for (j=0; j<matrix.length;j++){
                matrixNew.push(matrix[i][j]);
            }

        }


    function check_candidate(num, row, col) {
        for (var i = 0; i < 9; i++) {
            var b_index = ((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(col / 3) * 3) + (i % 3);
            if (num == matrixNew[(row * 9) + i] ||
                num == matrixNew[col + (i * 9)] ||
                num == matrixNew[b_index]) {
                return false;
            }
        }
        return true;
    }

    function get_candidate(index) {
        if (index >= matrixNew.length) {
            return true;
        } else if (matrixNew[index] != 0) {
            return get_candidate(index + 1);
        }

        for (var i = 1; i <= 9; i++) {
            if (check_candidate(i, Math.floor(index / 9), index % 9)) {
                matrixNew[index] = i;
                if (get_candidate(index + 1)) {
                    return true;
                }
            }
        }

        matrixNew[index] = 0;
        return false;
    }

    function chunk_in_groups(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i += 9) {
            result.push(arr.slice(i, i + 9));
        }
        return result;
    }

    return !get_candidate(0) ? 'No solution found.' :
        chunk_in_groups(matrixNew);

}
