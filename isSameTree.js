const isSameTree = (p, q) => {
    if(!(p || q)) return true;
    if(!(p && q) || p.val !== q.val) return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
}
