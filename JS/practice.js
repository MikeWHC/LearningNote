var validMountainArray = function(A) {
    if(A.length < 3) return false;
    
    let peak,
        i = 0
    while(peak === undefined && i < A.length){
        if(A[i] === A[i + 1]) return false;
        if(A[i] > A[i + 1] && i !== 0) peak = i;
        i++;
    }
    for(;i<A.length;i++){
        if(A[i] < A[i + 1]) return false;
    }
    return peak !== undefined
};
console.log(validMountainArray([0, 2, 2]))