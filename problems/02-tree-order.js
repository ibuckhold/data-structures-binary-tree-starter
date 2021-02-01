// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.

class TreeNode {
    // Your code here
    constructor(val) {
        this.val= val;
        this.left= null;
        this.right= null;
    }

}

function preOrderArray(root, arr=[]) {
    if (root === null) return [];
    arr.push(root.val);
    preOrderArray(root.left, arr);
    preOrderArray(root.right, arr);
    return arr;
}
root = new TreeNode('a');
        let b = new TreeNode('b');
        let c = new TreeNode('c');
        let d = new TreeNode('d');
        let e = new TreeNode('e');
        let f = new TreeNode('f');

        root.left = b;
        root.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    if (root===null) return [];
    // if (root.left) {
    //     inOrderArray(root.left);
    // }else {
    //     arr.push(root.val);
    // }
    // arr.push(root.val);
    // if (root.right) {
    //     inOrderArray(root.right);
    // }else {
    //     arr.push(root.val);
    // }
    // return arr;

    return [
        ...inOrderArray(root.left),
        root.val,
        ...inOrderArray(root.right)
    ]
}

// console.log(inOrderArray(root))
// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    if (root === null) return [];

    return [
        ...postOrderArray(root.left),
        ...postOrderArray(root.right),
        root.val,
    ]


}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
