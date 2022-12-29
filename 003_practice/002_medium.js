/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *  文字列の長さー1の数
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
//TODO:

function rotate(str, num) {
  const index = num > 0 ? num : str.length + num;
  return str.slice(str.length - index, str.length) + str.slice(0, str.length - index);
}
// let strArray = str.split('');
// console.log(strArray);
// let tmp = '';
// let strLength = strArray.length;
// console.log(strLength + 'strLen');
// let shiftNumber = num % strLength;
// console.log(shiftNumber + 'shiftNum');
// if (shiftNumber < 0)
//   for (let i = 0; i < shiftNumber; i++) {
//     tmp = strArray.pop();
//     console.log(tmp + 'tmp');
//     strArray.unshift(tmp);
//     console.log(i);
//   }
// return strArray.join('');



/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  // オブジェクト
  const vowels = {
    'a': true,
    'i': true,
    'u': true,
    'e': true,
    'o': true
  }
  let resultArray = '';
  for (let i = 0; i < str.length; i++) {
    if (!vowels[str[i]]) {
      resultArray = resultArray + str[i];
    }
    continue;
  }
  return resultArray;
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  const s2Length = s2.length;
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.substr(i, s2Length) === s2) {
      counter++;
    }
  }
  return counter;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *  後ろと前が同じなのであってるか
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */
//文字列の半分の長さまで
//TODO:

function isPalindrome(str) {
  const strLength = str.length;
  const splitStr = str.split('');
  let strLengthFromBack = strLength - 1;
  for (let i = 0; i < strLength / 2; i++) {
    if (splitStr[i] !== splitStr[strLengthFromBack - i]) {
      return false
    }
  }
  return true;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 * 素数は 1 と それ以外の数字で割り切れない数字なので、
11 が素数かどうかを見極めるには、
11 / 2 で割れるか？
11 / 3 で割れるか？
11 / 4 で割れるか？
11 / 5 で割れるか？
…
11 / 10 で割れるか？
という形で一つずつ確認して、一つも割れるものがなければ素数と判断できます。
一番愚直な解き方はこれになります。
本当はもっと最適化できるのですが、とりあえずはこれをコードに直せると良いと思います。
 */
//TODO:
// 大き数字の時forのかしすうをへらせる
// 偶数は計算する必要なし
// 約数
// 100 5 20 4 25 2 50 10 10
// root numまでの数字を考える平方根 のとこまで聞かれる（）
// num = 100 の場合 10まで
// 簡単に作成して熟考していく→本当にこれでいいか？
// 面接時に最適化のヒントをもらえるかも・・？
function isPrime(num) {
  if (num === 1) { return false }
  if (num === 2) { return true }
  for (let i = 3; i < num; i + 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
/**
*  配列の4と次の数字を抜いた合計
*
*  与えらた配列の合計を返す関数を実装してください。
*  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
*
*  example:
*    [1, 2, 3, 4] => 6
*    [1, 2, 3, 4, 5] => 6
*    [1, 4, 3, 4, 5] => 1
*    [4, 3, 3, 5] => 8
*    [4, 3, 3, 4] => 3
*    [4] => 0
*
*/
// TODO:
// 型付言語の場合動かないかも？java go
// エッジケースが考えられてるかが肝
// nullの値を再度確認しておく
// すうじがあきらあかなのでOK
// Numberくらすがそんざいする そこに使ってるように見える
function sumWithout4andNext(array) {
  let sum = 0;
  const uncountNum = 4;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === uncountNum || array[i - 1] === uncountNum) {
      continue;
    }
    sum += array[i];
  }
  return sum;
}

let array = [1, 2, 3, 4];

sumWithout4andNext(array);

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
