/**
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root
  console.log("p:", p, "q:", q);


  var left = lowestCommonAncestor(root.left, p, q)
  var right = lowestCommonAncestor(root.right, p, q)

  if (!left) return right; // p and q are in the right subtree
  if (!right) return left // p and q are in the left subtree

  console.log("Root!:", root);
  return root // p is in one side and q is in the other

};

lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1);