function leafnode(arr,min,max){
    if(i>=arr.length){
        return false
    }
    if(arr[i]<max && arr[i]>min){
        i++
        var left=leafnode(arr,min,arr[i-1])
        var right=leafnode(arr,arr[i-1],max)
        if(!left && !right){
            console.log("leaf",i,arr[i-1])
        }
        return true
    }
    return false
}
let arr=[890, 325, 290, 530, 965]
let i=0
leafnode(arr,Number.MIN_VALUE,Number.MAX_VALUE)