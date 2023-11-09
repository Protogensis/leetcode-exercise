import { LinkedList } from "./ds"
import { getDecimalValue } from "./leetcode-exercise"

let list = new LinkedList()
let arr = [0,1,0,1,0,0,1]
list.pushArray(arr)


console.log(list.toString())
console.log(getDecimalValue(list.getHead()))