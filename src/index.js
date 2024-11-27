// import Tree from "./tree.js";
// import buildTree from "./build-tree.js";
// import Node from "./node.js";
// import { printFn, addOne, doNothing } from "./callbacks.js";
import { driverScript } from "./driver-script.js";

driverScript();

// let root = buildTree([2, 1, 4, 6, 0, 0, 0, 11, 2, 10, 5, 7, 8, 7, 5, 3]);
// let tree = new Tree(root);

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

// let unRoot = new Node(1);
// unRoot.left = new Node(2);
// unRoot.left.left = new Node(3);
// unRoot.left.left.left = new Node(4);
// let unTree = new Tree(unRoot);

// prettyPrint(tree.root);
// prettyPrint(unTree.root);

// try {
//   tree.postOrderIte(printFn);
// } catch (e) {
//   console.error(e);
// }

// unTree.rebalance();
// prettyPrint(unTree.root);
