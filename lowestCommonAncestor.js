/*      3
      /  \
    6     8
   / \      \
  2   11      13
      / \      /
     9   5    7

2,8 --> 3

starting from root node
traverse

if node recieves not null from both sides, then its LCA
if node != two vars

LCA 11, 8 -> 3

LCA 8,7 --> 8, left side is null, case where 1 node is ancestor is another node


*/
function lowestCommonAncestor(Node root, Node n1, Node n2) {
  if (root == null) {
    return null;
  }
  if (root == n1 || root == n2) {
    return root;
  }
  Node left = lowestCommonAncestor(root.left, n1, n2);
  Node right = lowestCommonAncestor(root.right, n1, n2);
  if (left != null && right != null) {
    return root;
  }
  if (left == null && right == null) {
    return null;
  }
  return left != null ? left : right;

}