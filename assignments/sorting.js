// T.C = O(nlogn)
// S.C = O(n)

const merge = function (arr1, arr2) {
  let arr = [];
  let [i, j, m, n] = [0, 0, arr1.length, arr2.length];
  while (i < m && j < n) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  arr = arr.concat(arr1.slice(i));
  arr = arr.concat(arr2.slice(j));
  return arr;
};

const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor((arr.length - 1) / 2);
  const arr1 = mergeSort(arr.slice(0, mid + 1));
  const arr2 = mergeSort(arr.slice(mid + 1));
  return merge(arr1, arr2);
};

const arr = [1, 5, 6, 7, 3, 2, 1, 4];
console.log(mergeSort(arr));
