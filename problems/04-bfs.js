// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root, arr = []){
    if (root === null) return [];

    let queue = [root];

    while(queue.length) {
        let shifted = queue.shift();
        arr.push(shifted.val);
        if (shifted.left) {
            queue.push(shifted.left);
        }
        if (shifted.right){
            queue.push(shifted.right);
        }
    }

    return arr;
/*
    push root
    push left
    push right

    function(left)
    return arr

    [F, B, G, A, D]

*/
}

module.exports = { bfs };
