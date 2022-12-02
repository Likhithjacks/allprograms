class dnode{
    constructor(data){
        this.prev=null
      this.data=data
      this.next=null
      
    }
}
class doublell{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    addnodeatstart(data){
        let newnode=new dnode(data)
        if(this.head!=null){
        this.head.prev=newnode
        newnode.next=this.head
        this.head=newnode
        }
        else{
            this.head=newnode
            this.tail=newnode
        }
        this.length++
        this.printll()
    }
    addnodeatlast(data){
        let newnode=new dnode(data)
        if(this.head==null){
            this.head=newnode
            this.tail=newnode
        }
        else{
            this.tail.next=newnode
            newnode.prev=this.tail
            this.tail=newnode
        }
        this.length++
        this.printll()
    }
    printll(){
        let curr=this.head
        let ans=""
        while(curr!=null){
            
            ans+="<-"+curr.data+"->"
            curr=curr.next
        }
        
        console.log(ans)
    }
    addnodeinmiddle(data,pos){
        let newnode=new dnode(data)
        if(pos>this.length){
            console.log("invalid position")
            return 
        }
           if(pos==0){
            this.addnodeatstart(data)
           }
           else if(pos==this.length){
           this.addnodeatlast(data)
           }
           else{
            let curr=this.head
          
            let index=0
            while(index!=pos-1){
                curr=curr.next
                index++
            }
            newnode.prev=curr
            newnode.next=curr.next
            curr.next=newnode
            curr=curr.next
            curr.prev=newnode
           } 
           this.length++
           this.printll()
    }
    
}

let doublelinkedlist=new doublell()
doublelinkedlist.addnodeatlast(4)
doublelinkedlist.addnodeatstart(3)
doublelinkedlist.addnodeinmiddle(9999,2)
doublelinkedlist.addnodeatstart(2)
doublelinkedlist.addnodeatstart(1)
doublelinkedlist.addnodeatlast(6)
doublelinkedlist.findlast()
doublelinkedlist.printll()
