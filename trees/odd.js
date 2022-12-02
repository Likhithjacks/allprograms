
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
       let twos=[]
    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let tempcount=0
          while(temp%2==0){
            tempcount+=1
            temp/=2
          }
          twos.push(tempcount)
    }
    let primefactswithtwo=0   //we need count of elements with odd number of 2's in factors 
    let lastfact=0    //to store element if even number of prime factors having two
    
    for(let j=0;j<twos.length;j++){
        if(twos[j]%2!=0){
            lastfact=arr[j]
            primefactswithtwo+=1
        }
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