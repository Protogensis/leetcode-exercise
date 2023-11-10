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
}

/**
 * 队列
 */
export class Queue{
    private arr:number[]
    constructor(){
        this.arr = new Array<number>()
    }
    push(val: number) {
        this.arr.push(val)
    }

    pushArray(arr: number[]) {
        for (const iterator of arr) {
            this.push(iterator)
        }
    }


    shift(){
        return this.arr.shift()
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.arr.length
    }
}

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

    //遍历
    inorder():Array<number>{

      let re = new Array<number>()
      inorder(this.root)
      function inorder(node:TreeNode|null){
        if(node == null)
          return
        inorder(node.left)
        re.push(node.val)
        inorder(node.right)
      }
      return re
    }
    
}
