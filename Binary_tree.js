class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right

    }
}

class BST {
    constructor() {
        this.root = null
    }
    add(data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data)
            return
        }
        else {
            const search = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data)
                        return;
                    }
                    else if (node.left !== null) {
                        return search(node.left)
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return
                    }
                    else if (node.right !== null) {
                        return search(node.right)
                    }
                }
                else {
                    return null

                }
            }
            return search(node)

        }

    }

    findMin(){
       let  current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    findMax(){
        let current = this.root
        while (current.right !== null){
            current = current.right
        }
        return current.data
    }
}
b = new BST()
b.add(12)
b.add(13)
b.add(-1)
b.add(1)
b.add(-11)
b.add(110)

console.log(b.findMin(), b.findMax())

