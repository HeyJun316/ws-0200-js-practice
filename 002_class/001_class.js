
/**
 *  クラスの定義
 *
 *  ※※※ main関数は修正しないでください！！※※※
 *
 *  1. PersonクラスにインスタンスメソッドsayHi()を実装してください。
 *     sayHi()メソッドでは、 Hi!! という文字列を標準出力するように実装してください
 *  2. Personクラスにクラスメソッドdescribe()を実装してください
 *     describeメソッドでは、This is a Person class という文字列を表示するように実装してください
 *  3. Personクラスにname, age, bioフィールドを追加してください
 *     デフォルト値はname => '', age => 0, bio => ''
 *  4. Personクラスにコンストラクタを宣言して、name, age, bioフィールドを初期化できるようにしてください
 *  5. PersonクラスにisUnderageのゲッターを宣言してくだい。メソッドでは、ageが20歳未満であればtrue,そうでなければfalseを返すように実装してください
 *  6. 下記のmain関数が動くように、それぞれ実装をしてください。main関数の修正は不要です。
 *  　　1 ~ 5 が完了していれば、toStringのメソッドを実装するだけで大丈夫です。
 *     toStringは下記の内容の文字列が返却されることが期待値です。(先頭、末尾の空白は不要）
 *      name: ichiro, age: 54, bio: I like to play baseball
 *
 */

class Person {
  // 3 4
  constructor(name = '', age = 0, bio = '') {
    this.name = name;
    this.age = age;
    this.bio = bio;
  };

  // 1
  sayHi() {
    console.log('Hi!!');
  }

  // 2
  static describe() {
    console.log('This is a Person class');
  }

  // 5 ★
  get isUnderage() {
    return this.age < 20
  };

  // 6
  toString() {
    return `name: ${this.name}, age: ${this.age}, bio: ${this.bio}`;
  }
}
function main() {
  // message passing = person
  // person＝レシーバー （型を意識）
  const person = new Person('ichiro', 54, 'I like to play baseball')
  person.sayHi()
  Person.describe()
  person.isUnderage
  person.age = 19
  person.bio = 'I like to play basketball'
  return person.toString()
}

console.log(main());

module.exports = {
  Person,
  main
}
