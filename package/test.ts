
import { BinaryTree } from "./ds.ts"
import * as leetcode from './leetcode-exercise.ts'
let p = new BinaryTree()
const arrp = []
p.insertArray(arrp)

let q = new BinaryTree()
const arrq = []
q.insertArray(arrq)

const f = leetcode.isSameTree(p.root,q.root)
console.log(f)


