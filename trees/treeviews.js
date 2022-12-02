class treeNode {
    constructor(data) {
      this.data = data;
      this.left = this.right = null;
      this.vl = 0;
    }
  }
function topView(node){
    let elemmap=new Map()
    let q=[node]
    while(q.length!=0){
        let elem=q.shift()
        if(!elemmap.has(elem.vl)){
                elemmap.set(elem.vl,elem.data)
        }
              if(elem.left){
                q.push(elem.left)
                elem.left.vl=elem.vl-1
              }
              if(elem.right){
                q.push(elem.right)
                elem.right.vl=elem.vl+1
            
              }
    }
    return elemmap
}
function rightview(node){
        let q=[node]
        while(q.length>0){
            let size=q.length
            while(size>0){
            var curr=q.shift()
            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
            size--
           
            }
            console.log(curr.data)
        }
}

const t2=new treeNode(10)
t2.left=new treeNode(60)
t2.right=new treeNode(40)
t2.left.left=new treeNode(20)
t2.left.right=new treeNode(80)
t2.right.right=new treeNode(20)
t2.right.left=new treeNode(90)
rightview(t2)