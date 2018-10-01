/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
    return isvalid(root, Infinity, -Infinity)
    function isvalid(node, max, min) {
        if(node === null) return true
        if(node.val >= max || node.val <= min) return false
        return isvalid(node.left, node.val, min) && isvalid(node.right, max, node.val)
    }
}