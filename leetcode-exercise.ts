import { ListNode, TreeNode, Stack } from './ds'

/**
 * 
 * 257.二叉树的所有路径
 * 
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
    let ret = new Array<string>()
    let path = ''
    traverse(root,path)
    function traverse(node: TreeNode|null,path:string) {
        if(node === null){
            return
        }
        if(node.left === null && node.right === null){
            ret.push(path+node.val)
            return
        }
        
        traverse(node.left,path+node.val+'->')
        traverse(node.right,path+node.val+'->')
    }

    return ret
}

/**
 * 876.链表的中间节点
 * @type 链表
 * @param head
 * @returns
 */
export const middleNode = function (head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head

    while (slow != null || fast != null) {
        if (slow === null || fast === null || fast.next === null) {
            break
        }
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

/**1290.二进制链表转整数
 *
 */
export const getDecimalValue = function (head: ListNode | null): number {
    let stack = new Stack()
    let cur = head
    while (cur != null) {
        if (cur.val !== 0 && cur.val !== 1) {
            throw new Error('二进制数必须为0或1')
        }
        stack.push(cur.val)
        cur = cur.next
    }
    let re: number = 0
    let count: number = 0
    while (!stack.isEmpty()) {
        let val = stack.pop()
        if (val === undefined) {
            break
        }
        re += val * Math.pow(2, count)

        count++
    }

    return re
}

/**
 * LCR 136.删除链表的节点
 */
export const deleteNode = function (head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while (cur?.next != null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
            head = dummy.next
            return head
        }
        cur = cur.next
    }
    return null
}
