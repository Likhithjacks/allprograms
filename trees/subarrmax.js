function findarr(arr){
    let i=0
    let j=i+1
    let ans=[]
    let totalsum=0
    if(arr.length==1){
        return 0
    }
    while(i<arr.length){
        j=i+1
        let temparr=[]
        while(j<arr.length){
        if((j-i-1)%2==0){
            let temppoint=i
            let temparr=[]
            let tempsum=0
            while(temppoint<=j && !temparr.includes(arr[temppoint])){
                temparr.push(arr[temppoint])
                tempsum+=arr[temppoint]
                temppoint++
            }
             ans.push(temparr)
            totalsum=Math.max(tempsum,totalsum)
         
        }
            j++
        }
        i++
        
    }
    return totalsum
}
console.log(findarr([2,2]))
console.log(findarr([8,9,-8,9,10]))
