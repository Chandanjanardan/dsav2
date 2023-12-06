const arr=[1,2,3,4,5]
function binarySearch(arr,target){
    for (let i=0;i<arr.length-1;i++){
        if(target==arr[i]){
            console.log(`${target} is found at ${i} index`)
            return
        }
        
    }
    console.log("Out of bound")
}
binarySearch(arr,10)

// console.log(arr.length)