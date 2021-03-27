// code
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if ((p !== null && q === null) || (p === null && q !== null)) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
