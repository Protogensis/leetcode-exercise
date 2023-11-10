import { LinkedList,BinaryTree ,Queue} from "./ds"
import * as leetcode from "./leetcode-exercise"

let t = new BinaryTree()
let arr = [2,3,1,4]
t.insertArray(arr)

console.log(t.toString())
let list = leetcode.levelOrder(t.root)

console.log(list)