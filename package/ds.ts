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

  pushArray(arr: number[]) {
    for (const iterator of arr) {
      this.push(iterator)
    }
  }

  pop() {
    return this.arr.pop()
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.arr.length
  }

  toArray() {
    return this.arr
  }
}

/**
 * 队列
 */
export class Queue<T> {
  private arr: T[]
  constructor() {
    this.arr = new Array<T>()
  }
  push(val: T) {
    this.arr.push(val)
  }

  pushArray(arr: T[]) {
    for (const iterator of arr) {
      this.push(iterator)
    }
  }

  shift() {
    return this.arr.shift()
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.arr.length
  }
}

/**
 * 二叉树节点
 */
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 * 二叉搜索树
 */
export class BinaryTree {
  root: TreeNode | null = null
  constructor() {}

  //插入
  insert(val: number) {
    if (this.root == null) {
      this.root = add(this.root)
    } else {
      add(this.root)
    }
    function add(node: TreeNode | null): TreeNode {
      if (node === null) {
        return new TreeNode(val)
      }
      if (val < node.val) {
        node.left = add(node.left)
      } else if (val >= node.val) {
        node.right = add(node.right)
      }
      return node
    }
  }

  insertArray(arr: number[]) {
    for (const iterator of arr) {
      this.insert(iterator)
    }
  }

  /**
   * 中序遍历
   * @returns
   */
  inorder(): Array<number> {
    let re = new Array<number>()
    inorder(this.root)
    function inorder(node: TreeNode | null) {
      if (node == null) return
      inorder(node.left)
      re.push(node.val)
      inorder(node.right)
    }
    return re
  }

  /**
   *
   * @returns 中序遍历后的数组
   */
  toString() {
    let arr = this.inorder()
    return arr
  }
}

/**
 * 平衡二叉树节点
 */
export class AVLNode {
  depth: number
  val: number
  parent: TreeNode | null
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.depth = 0
    this.parent = null
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 * 平衡二叉树
 */

export class AVL {
}
