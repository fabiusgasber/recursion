const mergeSort = (arr) => {
    if(arr.length === 1) return arr;
    else if(arr.length > 1){
        const mid = arr.length / 2;
        const leftSide = mergeSort(arr.slice(0, mid));
        const rightSide = mergeSort(arr.slice(mid, arr.length));
        return merge(leftSide, rightSide);
    }
}

const merge = (leftSide, rightSide) => {
    const mergedArr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < leftSide.length && j < rightSide.length){
        if(leftSide[i] < rightSide[j]){
            mergedArr[k++] = leftSide[i++];
        }
        else {
            mergedArr[k++] = rightSide[j++];
        }
    }
    for(; i < leftSide.length; i++){
        mergedArr[k++] = leftSide[i];
    }
    for(; j < rightSide.length; j++){
        mergedArr[k++] = rightSide[j];
    }
    return mergedArr;
}

console.log(mergeSort([3, 2, 8, 1, 13, 8, 5, 0, 1, 90]));
console.log(mergeSort([105, 79, 100, 110]));