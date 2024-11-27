function printFn(node) {
  console.log(`${node.data}`);
}

function addOne(node) {
  node.data = node.data + 1;
}

function doNothing(node) {}

export { printFn, addOne, doNothing };
