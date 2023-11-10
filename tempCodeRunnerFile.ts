function levelOrder(root: TreeNode | null): number[][] {
    let res: number[][] = new Array()
    if (root == null)
        return new Array()
    let queue = new Queue<TreeNode>()
    queue.push(root)
    while (!queue.isEmpty()) {

        let size = queue.size()
        let arr = new Array<number>()
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node !== undefined) {
                arr.push(node.val)
            }
            if (node?.left != null) {
                queue.push(node.left)
            }
            if (node?.right != null) {
                queue.push(node.right)
            }
        }
        res.push(arr)

    }


    return res
};