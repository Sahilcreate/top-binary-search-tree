import buildTree from "./build-tree.js";
import Tree from "./tree.js";
import { doNothing } from "./callbacks.js";
import { randomNumArray, getRndInteger, prettyPrint } from "./tree-utils.js";

function driverScript() {
  let array = randomNumArray(10);
  let root = buildTree(array);
  let tree = new Tree(root);

  //Primary tree which is balanced
  let balance = tree.isBalanced();
  console.log("Balance: " + balance);
  prettyPrint(tree.root);

  let level = tree.levelOrder(doNothing);
  console.log("LevelOrder: " + level);

  let pre = tree.preOrderIte(doNothing);
  console.log("preOrder: " + pre);

  let post = tree.postOrderIte(doNothing);
  console.log("postOrder: " + post);

  let inOr = tree.inOrderIte(doNothing);
  console.log("inOrder: " + inOr);

  //Insert number between 101-200 to imbalance the tree
  let numbersAdded = 4;
  for (let i = 1; i <= numbersAdded; i++) {
    tree.insert(getRndInteger(101, 200));
  }

  balance = tree.isBalanced();
  console.log("Balance: " + balance);
  prettyPrint(tree.root);

  //Rebalancing the tree
  tree.rebalance();

  //Tree which is again balanced
  balance = tree.isBalanced();
  console.log("Balance: " + balance);
  prettyPrint(tree.root);

  level = tree.levelOrder(doNothing);
  console.log("LevelOrder: " + level);

  pre = tree.preOrderIte(doNothing);
  console.log("preOrder: " + pre);

  post = tree.postOrderIte(doNothing);
  console.log("postOrder: " + post);

  inOr = tree.inOrderIte(doNothing);
  console.log("inOrder: " + inOr);
}

// function randomNumArray(num) {
//   let array = [];
//   for (let i = 1; i <= num; i++) {
//     array.push(Math.floor(Math.random() * 101));
//   }
//   return array;
// }

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node === null) {
//     return;
//   }
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };

export { driverScript };
