
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */
// 考え方
// 再起を抜けるケース
// 16 17 を別で考える
// 使ってないけど使ってるていで
function sumSequence(n, sum = 0) {
  if (n === 0) return 0;
  return n + sumSequence(n - 1, sum);
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:l
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */
// 3つなくてもとける！1つでもOK！
function fibonacci(num, index = 0, array = []) {
  // ---fib----
  // if (num === 0) return 0;
  // if (num === 1) return 1;
  // return fibonacci(num - 1) + fibonacci(num - 2);
  // ---iterator---
  // array.push(0, 1);
  // for (let i = 2; i < num; i++) {
  //   array.push(array[num - 1] + array[num - 2]);
  // }
  // let result = array.shift();
  // return array;
  // ---in array---
  array = [0, 1, 1];
  if (array[num]) {
    return array[num];
  }
  array[num] = fibonacci(num - 1, array) + fibonacci(num - 2, array);
  return array[num];
}



/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 * Childrenの合計まででたけど、そこからが・・・わからぬ
 */
function fileSize(node, sum = 0) {
  console.log(node);
  console.log(node.children);
  node.children.reduce(function (a, elem) {

    console.log(elem.size);
    console.log(a);
    return a + elem.size;
  }, sum)
  //console.log(Object.keys(node) + ' = object.keys(node)');
  //console.log(Object.keys(node).length + ' = object.keys(node).length');
  return sum;
}

node = {
  type: 'folder',
  size: 0,
  children: [
    {
      type: 'folder',
      size: 0,
      children: [
        {
          type: 'folder',
          size: 0,
          children: [
            {
              type: 'file',
              size: 5
            },
            {
              type: 'file',
              size: 7
            },
            {
              type: 'file',
              size: 9
            },
          ]
        }
      ]
    },
    {
      type: 'file',
      size: 3
    },
    {
      type: 'file',
      size: 4
    },
    {
      type: 'file',
      size: 10
    },
  ]
};

fileSize(node, 0);

module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
