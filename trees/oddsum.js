function prime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

function primefacts(n){
    stack=[]
    while(n>1){
        for(let i=2;i<=n;i++){
            if(n%i==0){
            stack.push(i)
            n=n/i
            break
        }
           
        }
    }
    return stack
}
function countoddeven(list){
    let odd=0
    let even=0
    for(let i=0;i<list.length;i++){
        if(list[i]%2==0)
        {
             even+=1
        }   
        else{
            odd+=1
        }
 }
     return [odd,even]
}

function oddsum(arr){
    let operations=0
    let count=countoddeven(arr)
    //all are even
    if(count[0]==0){
       let primefactors=[]
       let minoftwo=Number.MAXIMUM_VALUE
    for(let i=0;i<arr.length;i++){
          primefactors.push(primefacts(arr[i]))
    }
    let primefactswithtwo=0   //we need count of elements with odd number of 2's in factors 
    let lastfact=0    //to store element if even number of prime factors having two
    
    for(let j=0;j<primefactors.length;j++){
        let temptwocount=0
        for(let k=0;k<primefactors[j].length;k++){
            if(primefactors[j][k]==2){
                temptwocount+=1
            }
        }
        console.log("tempcount",temptwocount)
        if(temptwocount%2!=0){
            lastfact=arr[j]
            primefactswithtwo+=1
        }
        minoftwo=Math.min(minoftwo,temptwocount)
    }
    if(primefactswithtwo%2==0){
        operations+=2
        return arr.filter((ele)=>{return ele!=lastfact})
    }
}

//odd number of odds
       if(count[0]%2!=0){
        return arr
       }
       if(count[0]%2==0){
        operations+=1
        return evenevens(arr,count)
       }

}
//even number of odds
function evenevens(arr,count){
    if(count[0]%2==0){
        console.log("even number of odds")
         for(let i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
                arr=arr.filter((ele)=>{return ele!=arr[i]})
            }
         }
        }
    return arr
    }
console.log(oddsum([6,4,10]))//all evens
console.log(oddsum([2,2,1]))// odd odds
console.log(oddsum([9,7,3]))//odd odds
console.log(oddsum([7,19,20]))//even odds