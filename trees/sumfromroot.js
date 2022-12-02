class treeNode{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
    rootsum(node){
        let stack=[node]
        function findsum(stack,ans){
            if(stack[stack.length-1].left==null || stack[stack.length-1].right==null){
                return
            }
           findsum(stack.push(stack[stack.length-1].right,ans+stack[stack.length-1].data))
           findsum(stack.push(stack[stack.length-1].left,ans+stack[stack.length-1].data))
           return ans
        }
       console.log(findsum(stack,0))
    }
}
const t2=new treeNode(10)
t2.left=new treeNode(60)
t2.right=new treeNode(40)
t2.left.left=new treeNode(20)
t2.left.right=new treeNode(80)
t2.right.right=new treeNode(20)
t2.right.left=new treeNode(90)
t2.rootsum(t2)