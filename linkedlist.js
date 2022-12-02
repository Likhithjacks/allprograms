class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.length=0
    }
    insertatstart(data){
        let newnode=new Node(data)
        if(this.head==null){
            this.head=newnode
        }
        else{
            newnode.next=this.head
            this.head=newnode
        }
        this.length++
    }
    insertatlast(data){
        let newnode=new Node(data)
        let temp=this.head
        if(this.head==null){
            this.head=newnode
        }
        else{
        while(temp.next!=null){
            temp=temp.next
        }
        temp.next=newnode
        this.length++
    }
}
    insertatmiddle(data,pos){
        let newnode=new Node(data)
        let temp=this.head
        let l=1
        while(l!=pos-1){
            l++
            temp=temp.next
        }
        newnode.next=temp.next
        temp.next=newnode
        this.length++
    }
    printlist(){
        let temp=this.head
        let result=""
        while(temp!=null){
           result+=temp.data+"->"
            temp=temp.next
        }
        console.log(result)
    }
    deletestart(){
        let address=this.head
        this.head=this.head.next
         address=null
         this.length--
    }
    findlast(){
        let temp=this.head
         while(temp.next!=null){
             temp=temp.next
         }
         console.log(temp)
     }
      mergeTwoLists(list1,list2) {
        let ans=list1
        if(list1==null){
            return list2
        }
        else if(list2==null){
            return list1
        }
        else{
            while(list1 && list2){
            if(list1.next.data>list2.data){
                console.log(list1)
                let temp1=list1.next
                list1.next=list2
                let temp2=list2.next
                list2.next=temp1
                list1.next=list1
                list2=temp2
        }
            else{
                list1=list1.next
            }
        }
        return ans.printlist()
        }
    };

}
const list1=new linkedlist()
const list2=new linkedlist()
list1.insertatlast(1)
list1.insertatlast(2)
list1.insertatlast(4)
list2.insertatlast(1)
list2.insertatlast(3)
list2.insertatlast(4)
console.log(list1.mergeTwoLists(list1,list2))

