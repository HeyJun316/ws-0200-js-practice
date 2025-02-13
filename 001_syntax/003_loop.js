/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let num = 0; num <= 10; num++) {
    console.log(num);
  }

}

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */
function printOneToTenDesc() {
  let num = 10;
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */
function printOneToTenWhile() {
  let num = 0;
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

/** NG
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let num = 10;
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
