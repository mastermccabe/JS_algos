//runtime is O(n)
function lca(root, p, q) {
  if (root === null) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }

  var left = lca(root.left, p, q);
  var right = lca(root.right, p, q);
  if (left != null && right != null) {
    return root;
  }
  if (left == null && right == null) {
    return null;
  }

  return left != null ? left : right;
}

lca([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1);