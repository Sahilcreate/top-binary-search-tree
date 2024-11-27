import buildTree from "./build-tree.js";
import { doNothing } from "./callbacks.js";
import Node from "./node.js";

export default class Tree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    // let curr = this.root;
    // let parent = null;

    // let node = new Node(value)
    // //if tree is empty
    // if (curr isEqual null) {
    //   return given value node as tree root
    // }

    // //till we have current as null
    // //and parent as leaf
    // while (curr isNotEqual null) {
    //   parent = curr
    //   if (node is present before){
    //     return root of tree
    //   }
    //   if (curr is greater than value) {
    //     curr is now left of previous curr
    //   } else if (curr is less than value) {
    //     curr is now right of previous curr
    //   }
    // }

    // if (parent is big than value) {
    //   parent.left = node
    // } else if (parent is small than value) {
    //   parent.right = node
    // }

    let curr = this.root;
    let parent = null;

    let node = new Node(value);

    if (curr === null) {
      this.root = node;
      return this.root;
    }

    while (curr !== null) {
      parent = curr;

      if (curr.data === value) {
        return this.root;
      }

      if (curr.data > value) {
        curr = curr.left;
      } else if (curr.data < value) {
        curr = curr.right;
      }
    }

    if (parent.data > value) {
      parent.left = node;
    } else if (parent.data < value) {
      parent.right = node;
    }
  }

  deleteItem(value) {
    let parent = null;
    let curr = this.root;

    while (curr !== null && curr.data !== value) {
      parent = curr;

      if (curr.data > value) {
        curr = curr.left;
      } else if (curr.data < value) {
        curr = curr.right;
      }
    }

    if (curr === null) {
      return this.root;
    }

    // if node has no children or one children
    if (curr.left === null || curr.right === null) {
      //it can have five cases
      //1. current is a leaf
      //2-5. current can be parent's left or right
      //     and have left or right child

      //copy either the child node or null
      let newCurr;
      if (curr.left !== null) {
        newCurr = curr.left;
      } else {
        newCurr = curr.right;
      }

      //if root has to be removed
      if (parent === null) {
        return newCurr;
      }

      if (parent.data > value) {
        parent.left = newCurr;
      } else {
        parent.right = newCurr;
      }

      // console.log(parent.data);
      // console.log(curr.data);
      return this.root;
    }

    //if node has both the children, we
    //are going to find the inorder successor
    //and assign the node.data as the successor
    //and fix the successor node so it get's deleted
    console.log(parent.data);
    console.log(curr.data);
    let sParent = curr;
    let sCurr = curr.right;
    while (sCurr.left !== null) {
      sParent = sCurr;
      sCurr = sCurr.left;
    }

    // curr.data = sCurr.data;
    //this gave me a lot of trouble
    //where i was overiding the node
    //and then making comparison
    //hence always executing following
    //else condition
    let temp = sCurr.data;

    // console.log(sParent.data);
    // console.log(sCurr.data);
    // console.log(parent.data);
    // console.log(curr.data);

    if (sParent.data < sCurr.data) {
      sParent.right = sCurr.left;
    } else {
      sParent.left = sCurr.right;
    }

    curr.data = temp;

    return this.root;
  }

  //Queue is used in this traversal
  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }
    let order = [];
    let root = this.root;
    if (!root) return;

    let q = [root];

    while (q.length !== 0) {
      const front = q.shift();

      order.push(front.data);
      callback(front);
      if (front.left !== null) {
        q.push(front.left);
      }
      if (front.right !== null) {
        q.push(front.right);
      }
    }

    return order;
  }

  //Recursion
  inOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }

    if (!node) return;

    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  //iteration
  inOrderIte(callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }

    //start with root
    let order = [];
    let curr = this.root;
    let stk = [];

    //either curr is available or stack is not empty
    while (curr !== null || stk.length !== 0) {
      //left most element of left subtree of curr node
      while (curr !== null) {
        //push curr node in stack before changing curr
        stk.push(curr);
        curr = curr.left;
      }

      //null is replaced by node on which
      //operation has to be done
      curr = stk.pop();

      //read the current node
      order.push(curr.data);
      callback(curr);

      //move to right subtree of curr node
      curr = curr.right;
    }

    return order;
  }

  //Recursion
  preOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }

    if (!node) return;

    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  //Iteration
  preOrderIte(callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }

    let order = [];
    let curr = this.root;
    if (!curr) return;
    let stk = [curr];

    while (stk.length !== 0) {
      let node = stk.pop();

      order.push(node.data);
      callback(node);

      if (node.right !== null) {
        stk.push(node.right);
      }
      if (node.left !== null) {
        stk.push(node.left);
      }
    }

    return order;
  }

  //Recursion
  postOrder(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }

    if (!node) return;

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
  }

  //Iteration
  postOrderIte(callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided.");
    }

    let order = [];
    let curr = this.root;
    if (!curr) return;
    let stk = [curr];
    let prev = null;

    while (stk.length !== 0) {
      //updating current variable
      const curr = stk[stk.length - 1];

      //going down the tree
      if (!prev || prev.left === curr || prev.right === curr) {
        if (curr.left) {
          stk.push(curr.left);
        } else if (curr.right) {
          stk.push(curr.right);
        }
      }
      //coming up the tree from left
      else if (curr.left === prev) {
        if (curr.right) {
          stk.push(curr.right);
        }
      }
      //coming up the tree from right so process the node
      else {
        order.push(curr.data);
        callback(curr);
        stk.pop();
      }

      //updating previous variable
      prev = curr;
    }

    return order;
  }

  //using level order traversal through iteration
  height(value, root = this.root) {
    if (!root) return;

    let q = [];
    let level = 0;

    let height = -1;
    let depth = -1;

    q.push(root);

    while (q.length !== 0) {
      let n = q.length;

      //loop till nodes of one level
      //processed and out of the queue
      for (let i = 0; i < n; i++) {
        let front = q.shift();

        //level of node is it's depth
        if (front.data == value) {
          depth = level;
        }

        //enqueuing the next level nodes
        if (front.left !== null) {
          q.push(front.left);
        }

        //enqueuing the next level nodes
        if (front.right !== null) {
          q.push(front.right);
        }
      }

      //we have processed nodes of one level
      //and are moving to next level, if available
      level = level + 1;
    }

    height = level - depth - 1;
    return height;
  }

  //using recursion
  depth(value, root = this.root) {
    //if node is null, get out of that branch
    if (root === null) {
      return -1;
    }

    let dist = -1;

    //once we find the node we are looking for,
    //we are going to track back the path we
    //went while adding '1' and thus getting our depth
    if (
      //if current node is equal value
      root.data == value ||
      //if the left subtree has the node
      (dist = this.depth(value, root.left)) >= 0 ||
      //if the right subtree has the node
      (dist = this.depth(value, root.right)) >= 0
    ) {
      //increase the depth by '1' and return it
      return dist + 1;
    }

    return dist;
  }

  //a balanced tree is one where the difference
  //between heights of the left subtree
  //and the right subtree of "every" node
  //is not more than 1
  isBalanced(root = this.root) {
    //if the outcome is not equal to imbalance, return 'true'
    return this.checkHeightAndBalance(root) != -1;
  }

  //the idea is to use local variables to
  //keep track of height of left(lh) and right(rh)
  //subtree. if there is imbalance, we conclude
  //the function, otherwise the from lead to parent node
  //to it's parent node, the height accumulates and
  //give us height of respective subtrees.
  checkHeightAndBalance(node) {
    //height of null is 0
    if (node === null) {
      return 0;
    }

    //recursively call left till it hit null
    let lh = this.checkHeightAndBalance(node.left);
    if (lh == -1) {
      //if the left subtree has imbalance, return '-1'
      //through all return and get result
      return -1;
    }

    //after left subtree is concluded, it goes to
    //it's right subtree counterpart and check for
    //it
    let rh = this.checkHeightAndBalance(node.right);
    if (rh == -1) {
      //if the right subtree has imbalance, return '-1'
      //which propagates through the recursion
      //calls and provide the end result of '-1'
      return -1;
    }

    //this is the condition which shows imbalance
    //and return '-1' which propogates through
    //recursion calls and end the function with
    //'-1' return which signifies imbalance

    // prettier-ignore
    if (Math.abs((lh - rh) > 1)) {
      return -1;
    }

    //increase the height of respective subtree
    //by 1 if the imbalance is not found in it
    return 1 + Math.max(lh, rh);
  }

  rebalance() {
    let root = this.root;

    let data = this.levelOrder(doNothing);
    let newRoot = buildTree(data);

    this.root = newRoot;
  }
}
