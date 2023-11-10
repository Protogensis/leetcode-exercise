import { LinkedList,BinaryTree } from "./ds"
import * as leetcode from "./leetcode-exercise"


let tree = new BinaryTree()
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(2)
for(let i = 0;i<10;i++){
    tree.insert(Math.round(Math.random()*10))

}

console.log(tree.inorder())
console.log(leetcode.binaryTreePaths(tree.root))