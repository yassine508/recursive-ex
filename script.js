function fact(n){
    if (n==1){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
console.log(fact(5))
arr=[2,3,4]

function sumarray(arr){
    if (arr.length==0){
        return 0

    }
    else {
        return arr[0]+sumarray(arr.slice(1))
    }
}
console.log(sumarray(arr))
function countDigits(n){
    n=String(n)
    if (n.length==0){
        return 0
    }
    else{
        return  parseInt(n[0]) + countDigits(n.slice(1))
    }
}
console.log(countDigits(1234))
function reverseSequence(n){
    if (n==0){
        return ""
    }
    else {
        return n+reverseSequence(n-1)
    }
    }
    console.log(reverseSequence(5))
