/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  array.forEach(element => {
    console.log(element);
  });
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return dayOfWeek;
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 */

function findNum(array, num) {
  if (array.includes(num)) {
    return true;
  } else {
    return false;
  }
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 * →for文で
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *  ref url : https://www.techiedelight.com/ja/check-array-contains-duplicates-javascript/
 *  ref url : https://programmercollege.jp/column/7244/
 *
 *  ●Array.prototype.indexOf : 引数の内容と同じ内容を持つ最初の配列要素の添字を返す
 *  →https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *  ●Array.prototype.filter :  配列の中から、提供された関数で実装されたテストに合格した要素のみを抽出したシャローコピーを作成する
 *    ＊シャローコピーとディープコピーの違い
 *    →https://medium-company.com/%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%82%B3%E3%83%94%E3%83%BC%E3%81%A8%E3%82%B7%E3%83%A3%E3%83%AD%E3%83%BC%E3%82%B3%E3%83%94%E3%83%BC%E3%81%AE%E9%81%95%E3%81%84/
*   setオブジェクト 要素の数を数える setElemente.size
*   https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/size
 */

function isDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
  // const setElements = new Set(array);
  // return setElements.size !== array.length;
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
