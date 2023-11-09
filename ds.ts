/**
 * 基本数据结构
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export class LinkedList {
  private dummy: ListNode
  constructor() {
    this.dummy = new ListNode()
  }

  push(val: number) {
    let cur = new ListNode(val)
    this.dummy.next = cur
  }
  getHead() {
    return this.dummy.next
  }
}
