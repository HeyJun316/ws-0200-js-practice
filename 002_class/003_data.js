/**
 *
 *  オブジェクト指向やJavaScriptの組み込みAPIの成り立ちを理解するためにも
 *  データ構造をクラスで実装してみましょう。
 *  実際に使われるリストは要素の型の縛りはありませんが、今回のリストは要素を数値に限定します。
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class List {
  data = [];
  /**
   * Listクラスのインスタンスを作成する。
   * @constructor
   * @this {List}
   * @param {Number} array リストのデータ
   */
  constructor(array) {
    this.data = array;
  }

  /** リストの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** 引数で渡された添字のデータを取得する
   *
   * @param {Number} index
   * @return {Number}
   */
  index(index) {
    return this.data[index];
  }

  /** リストの 要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  push(item) {
    this.data.push(item)
  }

  /** 与えられた引数により、リストの要素を削除する
   * >なんで69 70を入れ替えるとNG？
   * >this.data[targetIndex]を直接returnにかけないのはundefinedがないから？
   * @param {Number} targetIndex
   *
   * @return {Number}
   */
  remove(targetIndex) {
    const newList = []; // オブジェトとの一種なので中身を書き変えれる
    // newList = []; // 配列丸ごと書き換えるのはダメ
    // let removeNum = undefined; ここで宣言するとfor文で使ってるように見えるので読みづらくなる
    // constでなるべく定義！
    for (let i = 0; i < this.data.length; i++) {
      if (i !== targetIndex) {
        newList.push(this.data[i]);
      }
    }
    const removeNum = this.data[targetIndex];
    this.data = newList;
    return removeNum;
  }

  /** リストの 末尾の要素を取得する
   *
   * @param {Number} element
   * @return {Number}
   */
  pop(targetIndex) {
    return this.data.pop(targetIndex);
  }

  /** リストの 先頭の要素を取得する
   *
   * @return {Number}
   */
  shift() {
    return this.data.shift();
  }

  /** リストの中から引数に合致する値を取得する
   *
   * XXX: find関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number | undefined}
   */
  find(target) {
    // if文実装
    // for (let i = 0; i < this.data.length; i++) {
    //   if (target === this.data[i]) {
    //     return this.data[i];
    //   }
    // }

    let i = 0;
    while (i < this.data.length) {
      if (target === this.data[i]) {
        return this.data[i];
      }
      i++;
    }

  }
  /** リストの中から引数に合致する値のindexを取得する。見つからない場合は-1を返す
   *
   * XXX: findIndex関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number}
   */
  findIndex(target) {
    for (let i = 0; i < this.data.length; i++) {
      if (target === this.data[i]) {
        // return this.data.indexOf(this.data[i]);
        return i;
      }
    }
    return -1;

    // while文
    // let i = 0;
    // while (i < this.data.length) {
    //   if (target === this.data[i]) {
    //     return i;
    //   }
    //   i++;
    // }
    // return -1;
  }

  /** リストの中から要素に合致する数を取り除く
   *
   * 実際のデータ(this.data)に変更を加えることなく、新しい配列を返す形で実装しましょう。
   *
   * XXX: filter関数は使わずにfor文、while文を活用して実装しましょう
   * expect(list.size).toEqual(3) //size ないよねarrayインスタンスに
   * @param {Number} target
   * @return {List}
   */
  filter(target) {
    // コンストラクタを変更すると動かなくなる
    let newList = [];
    for (let i = 0; i < this.data.length; i++) {
      if (target !== this.data[i]) {
        newList.push(this.data[i]);
      }
    }
    return new List(newList); //array
  }
  // じろーさん
  // const list = new List()

  // for (let i = 0; i < this.data.length; i++) {
  //   if (target !== this.data[i]) {
  //     list.push(this.data[i]);
  //   }
  // }

  // return list
}

/**
 *  スタックの実装
 *
 *  スタックの実装を理解して、要素の追加、取り出しのメソッドをそれぞれ実装しましょう。
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class Stack {
  data = [];

  /** スタックの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** スタックに要素を追加する
   *
   * @param {Number} item
   */
  push(item) {
    this.data.push(item);
  }

  // イミュータブル 元配列
  // 破壊的観点 pop レシーバーが ReactではNG
  /** スタックから要素を取得する
   *
   * @param {Number} item
   * @return {Number}
   */
  pop() {
    return this.data.pop();
  }

  /** スタックの末尾の要素を参照する
   *
   * @param {Number} item
   * @return {Number}
   */
  peek() {
    const index = this.data.length;
    return this.data[index - 1];
  }
}

/**
 *  キューの実装
 *
 *  キューの実装を理解して、要素の追加、取り出しのメソッドをそれぞれ実装しましょう。
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class Queue {
  data = [];

  /** キューの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** キューに要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  enqueue(item) {
    this.data.push(item);
  }

  /** キューから要素を取得する
   *
   * @return {Number}
   */
  dequeue() {
    return this.data.shift();
  }

  /** キューの要素を参照する
   *
   * @return {Number}
   */
  peek() {
    // NOTE: 何かしら残す時
    // TODO: やり残し
    // XXX: 注意して欲しい時
    return this.data[0];
  }
}

module.exports = {
  List,
  Stack,
  Queue
};
