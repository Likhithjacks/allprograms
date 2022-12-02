function maxlength(arr,k){
    let ans=[]
    let i=0
    let result=Number.MIN_VALUE
    while(i!=arr.length-2){
           let j=i+1
           let temp=[arr[i]]
           let orval=[arr[i]]
    while(j!=arr.length-1){
        if((orval[orval.length-1]| arr[j])<=k){
            orval.push(orval | arr[j])
            temp.push(arr[j])
        }
        j++
        if(temp.length==1 && temp[0]<=k){
            ans.push(temp)
        }
         else{
        ans.push(temp)
        }
    }
    result=Math.max(orval.length,result)
    i++
    }
    console.log("ans is",result)
    return ans
}
console.log(maxlength([1,4,2,3,5],3))