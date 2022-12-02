class hashtable{
    constructor(){
        this.hashtable=new Array(255)
        this.tablesize=0
    }
    hashfunc(key){
        let hashval=0
        for(let i=0;i<key.length;i++){
            hashval+=key.charCodeAt(i)
        }
        return hashval%this.hashtable.length
    }
    set(key,value){
        let hashedvalue=this.hashfunc(key)
        this.hashtable[hashedvalue]=[key,value]
        this.size++
    }
    get(key){
        let ind=this.hashfunc(key)
           console.log(this.hashtable[ind])
    }

    remove(key){
        let ind=this.hashfunc(key)
        if(this.hashtable[ind] && this.hashtable[ind].length) {
            this.hashtable[ind]=[]
            this.size--
            console.log("deleted")
        }
        else{
               console.length("no element found")
        }
    }
}
const tab=new hashtable()
tab.set("id",9747)
tab.get("id")
tab.set("likhith",9999777)
tab.get("likhith")
tab.remove("id")
