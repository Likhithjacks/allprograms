class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class bst{
    constructor(){
        this.root=null
    }
    insertnode(val){
        const newnode=new node(val)
        function traverse(node){
             if(node.data>val){
                if(!node.left){
                     node.left=newnode
                }
                else{
                traverse(node.left)
             }
            }
            else{
                if(!node.right){
                    node.right=newnode
               }
               else{
               traverse(node.right)
            }
            }
        }
        let currentnode=this.root
        if(!currentnode){
            this.root=newnode
      }
      else{
        traverse(this.root)
      }
    }
      

    bfs(){
        let ans=[]
        let q=[this.root]
       
        while(q.length!=0){
            let curr=q[0]
            if(curr.left!=null){
                q.push(curr.left)
            }
            if(curr.right!=null){
                q.push(curr.right)
            }
            let temp= q.shift()
            ans.push(temp.data)
        }
        console.log(ans)
    }

   preorderwithrecursion(){
    function traverse(node){
        if(!node){
            return
        }
        console.log(node.data)
        if(node.left)
        traverse(node.left)
        if(node.right)
        traverse(node.right)
    }
    traverse(this.root)
} 
inorderwithrecursion(){
    function traverse(node){
        if(!node){
            return
        }
        
        if(node.left)
        traverse(node.left)
        console.log(node.data)
        if(node.right)
        traverse(node.right)
    }
    traverse(this.root)
} 
postorderwithrecursion(){
    function traverse(node){
        if(!node){
            return
        }
        
        if(node.left)
        traverse(node.left)
        
        if(node.right)
        traverse(node.right)
        console.log(node.data)
    }
    traverse(this.root)
} 
   preorderiteration(){
    let stack=[this.root]
    while(stack.length!=0){
        let curr=stack.pop()
        if(curr.right){
             stack.push(curr.right)
        }
        if(curr.left){
            stack.push(curr.left)
        }
         console.log(curr.data)
    }
    
   }
   inorderwithiteration(){
        let stack=[]
        let currnode=this.root
        while(currnode||stack.length!=0){
            if(currnode){
                stack.push(currnode)
                currnode=currnode.left
            }
            else{
                currnode=stack.pop()
                console.log(currnode.data)
                currnode=currnode.right
            }
        }
   }
    postorderwithiteration(){
        let stack=[this.root]
        let prev=null
        while(stack.length!=0){
            let curr=stack[stack.length-1]
            if(prev==null|| prev.left==curr||prev.right==curr){
                if(curr.left){
                    stack.push(curr.left)
                }
                else if(curr.right){
                     stack.push(curr.right)
                }
                else{
                    stack.pop()
                    console.log(curr.data)
                }
            }
            else if(curr.left==prev){
                if(curr.right){
                stack.push(curr.right)
                }
                else{
                    stack.pop()
                    console.log(curr.data)
                }
            }
            else if(curr.right==prev){
             
                stack.pop()
                console.log(curr.data)
               
        }
        prev=curr
    }
}
    heightwithiteration(){
       let q=[this.root]
       let height=0
       while(true){
        let size=q.length
        if(size==0){
            return height
        }
        height++
        while(size>0){
        let curr=q.shift()
       if(curr.left){
        q.push(curr.left)
       }
      if(curr.right){
        q.push(curr.right)
       }
       size--
       }
    }
    }
    
     heightrecursion(node){
        if(node==null) {
            return -1
        }
        else{
            return Math.max(heightrecursion(node.left),heightrecursion(node.right))+1
        }
    }
    zigzag(){
        let lefttoright=true
        let q=[this.root]
        let tempq=[]
            while(q.length>0){
            let curr=q.pop()
            console.log(curr.data)
            if(lefttoright){
            if(curr.left){
                tempq.push(curr.left)                                                 
            }
            if(curr.right){
                tempq.push(curr.right)    
            }
            }
            else{
                if(curr.right){
                    tempq.push(curr.right)    
                }
                if(curr.left){
                    tempq.push(curr.left)                                                 
                }
            }
            if(q.length==0){
                lefttoright=!lefttoright
                q=[...tempq]
                tempq=[]
          }
        }
    }
    zigzagqueue(){
        let q=[this.root]
        let flag=true
        while(q.length>0){
            let size=q.length
            let lvlans=[]
            for(let i=0;i<size;i++){
                let curr=q.shift()
                if(flag){
                lvlans[i]=curr.data
                }
                else{
                lvlans[size-i-1]=curr.data
                }
                if(curr.left){
                    q.push(curr.left)
                }
                if(curr.right){
                    q.push(curr.right)
                }
            }
        flag=!flag
        console.log(lvlans)
        }
    }
    deletenode(node,val){
        let keynode=null
        if(node.data==val){
            node=null
            return
        }
        else{
            let currnode=node
            if(currnode.data<val){
                if(currnode.right){
                    currnode=currnode.right
                }
               else{
                return "node not found"
               }
            }
            else if(currnode>val){
                currnode=currnode.left
            }
            else if(currnode.data==val){
                  keynode=currnode
            }
        }
    }
 
}
const t1=new bst()
t1.insertnode(6)
t1.insertnode(3)
t1.insertnode(1)
t1.insertnode(2)
t1.insertnode(7)
t1.insertnode(8)
const t2=new node(90)
t2.left=new node(10)
t2.right=new node(10)
t2.left.left=new node(20)
t2.left.right=new node(80)
t2.right.right=new node(20)
t2.right.left=new node(90)
function findkey(node,val){
    if(node==null){
        return false
      }
      if(node.data==val){
        return true
      }
      var left=findkey(node.left,val)
      var right=findkey(node.right,val)
    return left || right
}
function ismirror(a,b){
    if (a == null && b == null) return true;
	if (a == null || b == null) return false;
	return (a.val == b.val) && ismirror(a.right, b.left) && ismirror(a.left, b.right);
}
function isBST(node,min,max){

    if(node==null){
        return true
    }
    if(node.data<min || node.data>max){
        return false
    }
    return isBST(node.left,min,node.data+1) && isBST(node.right,node.data+1,max)
}
console.log(isBST(t1,Number.MIN_VALUE,Number.MAX_VALUE))
