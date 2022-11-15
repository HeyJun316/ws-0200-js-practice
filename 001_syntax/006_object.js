/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  return obj = {
    name: 'Bob',
    age: 32,
    gender: 'male'
  };
}
console.log(getPersonObject());
/** ★
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {

}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 * 参考：https://qreat.tech/3584/
 */


let persons = [
  'Bob',
  'Mary',
  'Ann',
  'Mike'
];
function assignNumber(persons) {
  let randomNum = Math.random();
  let a = Object.fromEntries(persons.map(obj => [obj.id, obj]))
  console.log(a);
}

// persons.forEach((e, index) => {
//   obj[persons] = radomNum;
// });
/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
