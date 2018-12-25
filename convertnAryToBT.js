class Node {
    constructor(_val) {
        this.val = _val;
        this.children = [];
    }
}

class TreeNode {
    constructor(_val) {
        this.val = _val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node("1");

let b = new Node("2");
let e = new Node("5");
let f = new Node("6");
b.children = [e, f];

let c = new Node("3");
let d = new Node("4");

a.children = [b, c, d];
console.dir(a, { depth: null });

let children = [];
let siblings = [];

let root;

function convertToBinary(a) {
    root = new TreeNode(a.val);
    helper(root, a.children, []);
}

function helper(node, children, siblings) {
    if (!node) {
        return;
    }

    if (children && children.length) {
        let left = children.shift();
        node.left = new TreeNode(left.val);
        helper(node.left, left.children, children);
    }
    
    
    if (siblings && siblings.length) {
        let right = siblings.shift();
        node.right = new TreeNode(right.val);
        helper(node.right, right.children, siblings);
    }

}

convertToBinary(a);
console.dir(root, { depth: null });
