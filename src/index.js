/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
      var count = 0;
      preferences.unshift(0);
      for (var i = 1; i < preferences.length; i++) {
      if (i === preferences[preferences[preferences[i]]]){
      count = count + 1;
      }
      }
      return(Math.floor((count) / 3));
};
