// 144. Binary Tree Preorder Traversal: Easy
// root -> left -> right

var preorderTraversal = function(node) {
  let output = [];
  let stack = [];

  if(node !== null) {
    stack.push(node);
  }
  let cur;

  while(stack.length !== 0) {
    cur = stack.pop();
    output.push(cur.val);

    if(cur.right !== null) {
      stack.push(cur.right);
    }
    if(cur.left !== null) {
      stack.push(cur.left);
    }
  }

  return output;
};