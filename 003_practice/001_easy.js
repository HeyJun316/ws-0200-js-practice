
/**
 *  文字列の長さ
 *
 *  lengthを使わずに引数で渡された文字列の長さを求める関数を定義してください
 *
 *  example:
 *    'banana' => output: 6
 *    'cucumber' => output: 8
 *    '' => output: 0
 *
 */

function length(str) {
  let strLength = 0;

  while (str[strLength] !== undefined) {
    strLength++
  }
  return strLength;
}

/**
 *  文字列の反転★
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *  for分に変更1回のループで住む
 *  for 分の時ぐらいにletを使う
 */
function reverse(str) {
  // todo:
  // 元々のコード
  // let splitStr = str.split('');
  // let reverseStr = splitStr.reverse();
  // let joinStr = reverseStr.join('');
  // return joinStr;
  return str.split('').reverse().join('')
}

/**
 *  指定された文字列の位置を返却
 *
 *  指定された文字列の位置を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: 4
 *    'work', w => output: 0
 *    'bicycle', a => output: -1
 *
 */

function findIndex(str, char) {
  const strSplit = str.split('');
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === char) {
      return i;
    }
  }
  return -1;
}

/**
 *  指定された文字列を指定された文字で分割★
 *
 *  指定された文字列aを指定された一文字bで分割して配列を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: ['libr', 'ry']
 *    'apple,banana,pineapple', w => output: ['apple', 'banana', 'pineapple']
 *    'apple,banana,pineapple', ',' => output: ['apple', 'banana', 'pineapple']
 *    'bicycle', a => output: ['bicycle']
 * 該当文字のインデックス-1 と +1の文字列を返す
 * なければ文字列・配列をそのまま
 * for文で実装
 *
 */
// todo:
function split(a, b) {
  let array = [];
  let string = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b) {
      string += a[i];
    } else {
      array.push(string);
      string = '';
    }
  }
  array.push(string);
  return array;
}

// 元々ソース
// return a.split(b);
/**
 *  配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  let sum = 0;
  // for文で作成
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // return sum

  // const total = array.reduce((accumulator, array) => accumulator + array, sum);
  return array.reduce((accumulator, array) => accumulator + array, sum);
}

/**
 *  配列の平均
 *
 *  渡された配列の合計を整数(小数切り捨て)で返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 5
 *    [2, 5, 3] => output: 3
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: 5
 *    [1] => output: 1
 *    [] => output: 0
 *    ガード節意識
 */

function average(array) {

  if (array.length === 0) {
    return 0;
  }

  let initialValue = 0;
  for (let i = 0; i < array.length; i++) {
    initialValue += array[i];
  }
  return Math.floor(initialValue / array.length);
}

/**
 *  配列の結合★
 *
 *  渡された二つの配列を連結する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9], [3, 4] => output: [1, 3, 7, 9, 3, 4]
 *    ['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'] => output: ['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']
 *    [], [] => output: []
 *
 */
// todo: DONE!
function concat(a, b) {
  const array = [];
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    array.push(b[i]);
  }
  return array;
  // 元々のソース
  // return a.concat(b);
}

/**
 *  2.1.2 配列の個数 ★
 *
 *  渡された配列の要素数を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 4
 *    [2, 5, 3] => output: 3
 *    [1] => output: 1
 * 違い
 * set.size
 * console.count 引数の要素を数える
 * array.length
 * https://qiita.com/sainu/items/7d761c026563a649d046
 */
//todo: DONE!
function size(array) {
  let elementTotal = 0;
  for (let i = 0; i < array.length; i++) {
    elementTotal++;
  }
  return elementTotal;
  // 元々のソース
  // return array.length;
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *    [] => 表示しない ??
 // let max_val = Math.max.apply(null, array);
 // let min_val = Math.min.apply(null, array);
 // let max = array.reduce(function (a, b) { return Math.max(a, b) });
 // let mix = array.reduce(function (a, b) { return Math.min(a, b) });
 *
 */
//todo: DONE!
function minMax(array) {
  let max = [];
  let min = [];
  if (array.length !== 0) {
    max = Math.max(...array);
    min = Math.min(...array);
    console.log(`max: ${max}, min: ${min}`);
  }
}

/**
 *  連番
 *
 *  指定された数字のまでの連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [0, 1, 2, 3, 4]
 *    0 => []
 *
 */

function seq(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
}

/**
 *  奇数の連番
 *
 *  指定された数字までの奇数の連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [1, 3, 5]
 *    10 => [1, 3, 5, 7, 9]
 *    0 => []
 *
 */

function omitSeq(num) {
  let array = [];
  for (let i = 1; i <= num; i = i + 2) {
    array.push(i);
  }
  return array;
  // 別のやり方
  // for (let i = 0; i <= num; i++) {
  //   if (i % 2 !== 0) {
  //     array.push(i);
  //   }
  // }
  // return array
}

/**
 *  指定された数値以下の配列
 *
 *  指定された数字以下を抜き出した配列を返す関数を定義してください
 *
 *  example:
 *    [1, 7, 5, 4], 3 => [1]
 *    [1, 7, 5, 4], 7 => [1, 7, 5, 4]
 *    [], 7 => []
 *
 */
// 純粋関数
// ピュアなメソッド
// 引数を変更もしくはレシーバーは変更
//
// 内部的なローカル変数を描き得てるのはOK

function filter(array, num) {
  let filterArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= num) {
      filterArray.push(array[i]);
    }
  }
  return filterArray;
}



/**
 *  Fizz Buzz
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz() {
  const hundred = 100;
  for (let i = 1; i <= hundred; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
      console.log(`${i} FizzBuzz`);
      continue;
    }

    if (i % 3 === 0) {
      console.log(`${i} Fizz`);
      continue;
    }

    if (i % 5 === 0) {
      console.log(`${i} Buzz`);
      continue;
    }

    console.log(i);
  }
}

module.exports = {
  length,
  reverse,
  findIndex,
  split,
  sum,
  size,
  average,
  size,
  minMax,
  concat,
  seq,
  filter,
  omitSeq,
  fizzBuzz
}
