export default function mergeSort(array = []) {
  if (array.length <= 1) {
    return array;
  }

  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2, array.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length != 0 && right.length != 0) {
    if (left[0] < right[0]) {
      result.push(left[0]);
      left.shift();
    } else if (left[0] > right[0]) {
      result.push(right[0]);
      right.shift();
    } else {
      result.push(left[0]);
      left.shift();
      right.shift();
    }
  }

  while (left.length != 0) {
    result.push(left[0]);
    left.shift();
  }

  while (right.length != 0) {
    result.push(right[0]);
    right.shift();
  }

  return result;
}
