## Assignment

You’ll build a balanced BST in this assignment. Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.

- [x] 1. Build a `Node` class/factory. It should have an attribute for the data it stores as well as its left and right children.
- [x] 2. Build a `Tree` class/factory which accepts an array when initialized. The `Tree` class should have a `root` attribute, which uses the return value of `buildTree` which you’ll write next.
- [x] 3. Write a `buildTree(array)` function that takes an array of data (e.g., `[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]`) and turns it into a balanced binary tree full of `Node` objects appropriately placed (don’t forget to sort and remove duplicates!). The `buildTree` function should return the level-0 root node.
- [x] 4. Write `insert(value)` and `deleteItem(value)` functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not.
- [x] 5. Write a `find(value)` function that returns the node with the given value.
- [x] 6. Write a `levelOrder(callback)` function that accepts a callback function as its parameter. `levelOrder` should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how `Array.prototype.forEach` might work for arrays. `levelOrder` may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required.
- [x] 7. Write `inOrder(callback)`, `preOrder(callback)`, and `postOrder(callback)` functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with `levelOrder`.
- [x] 8. Write a `height(node)` function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
- [x] 9. Write a `depth(node)` function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
- [x] 10. Write an `isBalanced` function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
- [x] 11. Write a `rebalance` function that rebalances an unbalanced tree.

**Tie it all together**

Write a driver script that does the following:

- [x] 1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
- [x] 2. Confirm that the tree is balanced by calling `isBalanced`.
- [x] 3. Print out all elements in level, pre, post, and in order.
- [x] 4. Unbalance the tree by adding several numbers > 100.
- [x] 5. Confirm that the tree is unbalanced by calling `isBalanced`.
- [x] 6. Balance the tree by calling `rebalance`.
- [x] 7. Confirm that the tree is balanced by calling `isBalanced`.
- [x] 8. Print out all elements in level, pre, post, and in order.
