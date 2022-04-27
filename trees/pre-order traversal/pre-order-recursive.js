// root -> left -> right

const preorderTraversal = (root) => {
  let output = [];

  const traverse = (node) => {
    if (node === null) return;

    output.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return output;
}