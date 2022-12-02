class treeNode{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
    flattree(root){
        let q=[root]
        while(q.length>0){
            let curr=q.shift()
            if(curr.left)
                q.push(curr.left)
        
            if(curr.right)
                q.push(curr.right)
            
            if(q.length)
            curr.right=q[0]
            curr.left=null
        }
     let temp=t2
     while(temp.right){
        console.log(temp.data)
        temp=temp.right
     }
    }
   
}
var flatten = function (root) {
    if (root === null) {
      return;
    }
    let stack = [];
  
    stack.push(root);
  
    while (stack.length) {
      let node = stack.pop();
  
      if (node.right) {
        stack.push(node.right);
      }
  
      if (node.left) {
        stack.push(node.left);
      }
  
      if (stack.length) {
        node.right = stack[stack.length - 1];
      }
  
      node.left = null;
    }
    let temp=t2
    while(temp.right){
       console.log(temp.data)
       temp=temp.right
    }
  };
const t2=new treeNode(10)
t2.left=new treeNode(60)
t2.right=new treeNode(40)
t2.left.left=new treeNode(20)
t2.left.right=new treeNode(80)
t2.right.right=new treeNode(70)
t2.right.left=new treeNode(90)
flatten(t2)