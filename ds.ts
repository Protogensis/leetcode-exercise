/**链表节点
 * 
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * 链表
 * 
 */
export class LinkedList {
  private dummy: ListNode
  private last: ListNode
  private size: number
  constructor() {
    this.dummy = new ListNode()
    this.last = this.dummy
    this.size = 0
  }

  push(val: number) {
    let cur = new ListNode(val)
    this.last.next = cur
    this.last = cur
    this.size++
  }

  getSize() {
    return this.size
  }

  pushArray(arr: number[]) {
    for (const iterator of arr) {
      this.push(iterator)
    }
  }

  getHead() {
    return this.dummy.next
  }



  toString() {
    let re = ''
    let cur = this.dummy.next
    while (cur != null) {
      if (cur.next === null) {
        re += cur.val
        break
      }
      re += cur.val + ' -> '
      cur = cur.next
    }

    return re
  }
}

/**
 * 栈
 */
export class Stack {
  private arr: number[]
  constructor() {
    this.arr = new Array()
  }

  push(val: number) {
    this.arr.push(val)
  }

  pop() {

    return this.arr.pop()
  }
  
  isEmpty() {
    return this.size() === 0
  }

  size(){
    return this.arr.length
  }
}
