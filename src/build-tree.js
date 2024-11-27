import mergeSort from "./sort-array.js";
import Node from "./node.js";

//there are two ways of doing this,
//one is from recursion and other
//is using queue. we are building using
//queue as this is my first time
//using it.

export default function buildTree(array) {
  //let sortedArray = sortTheArray()
  //let n = sortedArray.length
  //
  //let mid = mid of array;
  //let root = new Node(sortedArray[mid]);
  //
  //let q = [{node: root, range: [0, n-1]}];
  //let frontIndex = 0;
  //
  //while(frontIndex<q.length) {    <--this is wrong-->
  //  let front = q[frontIndex]
  //  let current = front.data
  //  let [s,e] = current.range
  //  let index = Math.floor((s+e)/2)
  //
  //  if (left subtree exist)
  //    let midLeft = Math.floor((s+(index-1))/2)
  //    let left = new Node(arr[midLeft])
  //    current = left
  //    q.push({node: left, range: [s, index.-1]})
  //
  //  if (right subtree exist)
  //    let midRigth = Math.floor(((index+1)+e)/2)
  //    let right = new Node(arr[midRight])
  //    current = right
  //    q.push({node: right, range: [index+1, e]})
  //}
  //frontIndex++
  //
  //return root;

  //sortedArray
  let sArray = mergeSort(array);
  // console.log(sArray);

  let n = sArray.length;

  if (n === 0) {
    return null;
  }

  let mid = Math.floor((n - 1) / 2);
  let root = new Node(sArray[mid]);

  //push an element in queue
  let q = [
    {
      node: root,
      range: [0, n - 1],
    },
  ];
  let currentQIndex = 0;

  //while the pointer of current Queue index
  //is less than the Queue length till then
  //we do the operation
  while (currentQIndex < q.length) {
    //initializing variables for current iteration
    //which are going to be used during the operations
    //like the element, it's node, it's range and it's
    //index in sortedArray
    let currentQElement = q[currentQIndex];
    let currentNode = currentQElement.node;
    let [start, end] = currentQElement.range;
    let arrayIndex = Math.floor((start + end) / 2);

    //if the left half exist in sortedArray
    //then we are going to push
    //that half's mid in the queue
    if (start < arrayIndex) {
      let leftMid = Math.floor((start + (arrayIndex - 1)) / 2);
      let left = new Node(sArray[leftMid]);
      currentNode.left = left;
      q.push({
        node: left,
        range: [start, arrayIndex - 1],
      });
    }

    //then if right half exist in sortedArray
    //then we are going to push
    //that half's mid in the queue
    if (end > arrayIndex) {
      let rightMid = Math.floor((arrayIndex + 1 + end) / 2);
      let right = new Node(sArray[rightMid]);
      currentNode.right = right;
      q.push({
        node: right,
        range: [arrayIndex + 1, end],
      });
    }

    //we are done with the mid of sortedArray
    //now are are increaing the index of pointer
    //that is pointing elements in queue.
    //Now if left half existed then it's going
    //to point at that half's mid and again do the operations
    //of linking nodes and again push element in queue
    //then the pointer move to mid of right half of the whole
    //sorted array
    currentQIndex++;
  }

  return root;
}
