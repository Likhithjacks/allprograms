arr=[11,13,21,3]
function lge(arr){
    let stack=[]
    let ans=[]
    for(let i=0;i<arr.length;i++){
        if(stack.length==0){
            stack.push(arr[i])
            ans.push(-1)
        }
        else if(arr[i]>stack[stack.length-1]){
            while(arr[i]>stack[stack.length-1] && stack.length>0){
                stack.pop()
            }
            if(stack.length==0){
                ans.push(-1)
            }
            else{
            ans.push(stack[stack.length-1])
            }
            stack.push(arr[i])
        }
        else{
            ans.push(stack[stack.length-1])
            stack.push(arr[i])
        }
    }
    console.log(ans)
}
lge(arr)

function lle(arr){
    let stack=[]
    let ans=[]
    for(let i=0;i<arr.length;i++){
    if(stack.length==0){
        ans.push(-1)
        stack.push(arr[i])
    }
    else if(arr[i]<stack[stack.length-1]){
        while(arr[i]<stack[stack.length-1] && stack.length!=0){
            stack.pop()
        }
        if(stack.length==0){
            ans.push(-1)
        }
        else{
            ans.push(stack[stack.length-1])

        }
        stack.push(arr[i])
    }
    else{
        ans.push(stack[stack.length-1])
        stack.push(arr[i])
    }
}
console.log(ans)
}
lle(arr)


function nge(arr){
    let stack=[]
    let ans=[]
    for(let i=arr.length-1;i>=0;i--){
        if(stack.length==0){
            ans.push(arr.length)
            stack.push(arr[i])
        }
        else if(arr[i]>stack[stack.length-1]){
            while(stack.length!=0 && arr[i]>stack[stack.length-1]){
                stack.pop()
            }
            if(stack.length==0){
                ans.push(-1)
            }
            else{
                ans.push(stack[stack.length-1])
            }
            stack.push(arr[i])
        }
       else{
        ans.push(stack[stack.length-1])
          stack.push(arr[i])
       }
    }
    console.log(ans.reverse())
}
nge(arr)