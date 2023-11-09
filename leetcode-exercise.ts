import { ListNode,Stack } from './ds'


/**1290.二进制链表转整数
 * 
 */
const getDecimalValue = function (head: ListNode | null): number {
    let stack = new Stack()
    let cur = head
    while (cur != null) {
        if(cur.val!==0 && cur.val!==1){
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

export {getDecimalValue}

