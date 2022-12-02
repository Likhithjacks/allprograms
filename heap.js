class maxheap{
    constructor(){
        this.heap=[]
    }
    insert(data){
        this.heap.push(data)
        let i=this.heap.length-1
        while(i!=0){
            let parentind=Math.floor((i-1)/2)
            if(this.heap.length==1){
                return this.heap
            }
            if(this.heap[i]<this.heap[parentind]) return this.heap
            let temp=this.heap[i]
            this.heap[i]=this.heap[parentind]
            this.heap[parentind]=temp
            i=parentind
          
        }
        return this.heap
    }
    extractMax(){
        let maxelement=this.heap[0]
        console.log(maxelement)
        this.heap[0]=this.heap.pop()
        if(!this.heap.length==0) return null
        let n=0
        while(n!=this.heap.length-1){
            let leftchild=2*n+1
            let rightchild=2*n+2
            if(this.heap[rightchild]>this.heap[n]){
                let temp=this.heap[rightchild]
                this.heap[rightchild]=this.heap[n]
                this.heap[n]=temp
            }
            if(this.heap[leftchild]>this.heap[n]){
                let temp=this.heap[leftchild]
                this.heap[leftchild]=this.heap[n]
                this.heap[n]=temp
            }
            n++
        }
        return this.heap
    }
   
}
let a=new maxheap()
console.log(a.insert(84))
console.log(a.insert(76))
console.log(a.insert(68))
console.log(a.insert(54))
console.log(a.insert(55))
console.log(a.insert(64))
console.log(a.extractMax())