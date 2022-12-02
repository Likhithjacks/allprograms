class stack{
    constructor(){
        this.data=[]
        this.top=-1
    }
    isEmpty(){
        if(this.top!=-1){
            return false
        }
        return true
    }
    push(elem){
        this.top++
        this.data[this.top]=elem
    }
    pop(){
        if(this.isEmpty()){
            return "no elements are there"
        }
        this.data.pop()
        this.top--
    }
    print(){
        let p=this.top
        while(p!=-1){
            console.log(this.data[p])
            p--
        }
        console.log(this.data)
    }
    peek(){
        console.log(this.data[this.top])
    }
    insertatbottom(elem){
        if(this.isEmpty()){
            this.push(elem)
            return
        }
        else{
                let temp=this.data[this.top]
                this.pop()
                this.insertatbottom(elem)
                this.push(temp)
            
        }
    }
    reverse(){
        if(this.isEmpty()){
            return
        }
        else{
                let temp=this.data[this.top]
                this.pop()
                this.reverse()
                this.insertatbottom(temp)
        }
    }
    sortstack(){
        
    }
}
s=new stack()
s.push(9)
s.push(6)
s.push(5)
s.push(4)
s.print()
s.insertatbottom(100)
s.print()
s.reverse()
s.print()
console.log(s)