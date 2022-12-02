function checkavg(d){
    console.log("in check ",d)
    if(Math.ceil(b.length/2)>=d[l])
     return false
     return true
     }

b="aaabbzzss"
l="a"
d={}
d=d.sorted()
let tempvar=""
let tempcount=0
for(let i=0;i<b.length;i++){
    if(d[b[i]]){
        d[b[i]]+=1
    }
    else{
        d[b[i]]=1
    }
}
if(!checkavg(d)){
    console.log("in 23 ",d)
for(let j=0;j<b.length;j++){
    console.log("in 24 ",b[j])
        if(b[j]!=l){
            console.log("in 27 ",b[j])
            tempvar=b[j]
            tempcount=d[b[j]]
            console.log("in 30",tempvar,tempcount)
            delete d[b[j]]
            console.log("in 32 ",d)
            if(checkavg(d)){
                console.log("yes ",d)
                break
            }
            if(tempcount!=0){
                console.log("in 38",tempvar)
                d[tempvar]=tempcount
            }
        }
}

}
else{
console.log("yes ",d)
}

