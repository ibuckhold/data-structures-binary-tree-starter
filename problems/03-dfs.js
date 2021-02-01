// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values

const { inOrderArray } = require("./02-tree-order");


class TreeNode {
    // Your code here
    constructor(val) {
        this.val= val;
        this.left= null;
        this.right= null;
    }

}

// in the order you visited them.
function dfs(root, arr = []){
    if (root === null) return [];

    arr.push(root.val)

    if (root.left) {
        dfs(root.left, arr);
    }

    if (root.right) {
        dfs(root.right, arr);
    }


    // console.log(arr);
    return arr;

}

// root = new TreeNode('a');
//         let b = new TreeNode('b');
//         let c = new TreeNode('c');
//         let d = new TreeNode('d');
//         let e = new TreeNode('e');
//         let f = new TreeNode('f');

//         root.left = b;
//         root.right = c;
//         b.left = d;
//         b.right = e;
//         c.right = f;



// console.log(inOrderArray(root))


module.exports = { dfs };
