/* 
	the main idea is to perform in-order (left -> root -> right) traversal
	compare prev to current, should be current > prev
	not optimal
*/

// 98. Validate Binary Search Tree


var isValidBST = function(root) {
  let output = [];
  
  function traverse(root) {
    if(root === null) return;
    
    traverse(root.left);
    output.push(root.val);
    traverse(root.right);
  }

  traverse(root);
  
  for(let i = 0 ; i < output.length - 1; i++) {
    if(output[i + 1] <= output[i]) return false;
  }

  return true;
};