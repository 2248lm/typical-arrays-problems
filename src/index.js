
exports.min = function min (array) {
  if (array === undefined || array.length < 1) return 0;
  return (array.sort((a, b) => a - b)[0]);
}

exports.max = function max (array) {
  if (array === undefined || array.length < 1) return 0;
  return (array.sort((a, b) => b - a)[0]);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length < 1) return 0;
  let sum = 0;
  array.map(e => sum = sum + e);
  return (sum / array.length);
}
