/** 計算量 どゆうの違い計算量
 *  2.2.1 バブルソート
 *  O(n2)
 *  配列の中から「大きさが逆転している部分があったら swap する」を繰り返す
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length; i < j; j--) {
      if (array[j] < array[j - 1]) {
        let tmp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *  O(n^2)
 *  頭の要素を固定し、他の要素を適切な位置に動かす
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tmp = array[i];
    let j;
    for (j = i - 1; 0 <= j; j--) {
      if (tmp > array[j]) {
        break;
      } else {
        array[j + 1] = array[j];
      }
    }
    array[j + 1] = tmp;
  }
  return array
}
/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 * O(n log n)
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2), right = arr.slice(0, mid), left = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort(a, start = 0, end = (a.length - 1)) {
  const pivotIndex = Math.floor(a.length / 2), pivot = a[pivotIndex], left = start, right = end;

  while (true) {
    while (a[left] < pivot) {
      left++;
    }
    while (a[right] > pivot) {
      right--;
    }

    if (right <= left) {
      break;
    } else {
      let tmp = a[left];
      a[left] = a[right];
      a[right] = tmp;
      left++;
      right--;
    }
  }
  //左側に分割できるデータがある場合、quick_sort関数を呼び出す。
  if (start < left - 1) {
    quick_sort(start, left - 1);
  }
  //右側に分割できるデータがある場合、quick_sort関数を呼び出す。
  if (right + 1 < end) {
    quick_sort(right + 1, end);
  }
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
