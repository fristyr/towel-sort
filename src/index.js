module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  else {
      let result = [];
      let matrixNum = 0;
      for (let i of matrix) {
          if (matrixNum % 2 !== 0) i = i.reverse();
          matrixNum++;
          result.push(i);
      }
      return result.join().split(",");
  }
}
