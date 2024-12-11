const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    else if(arr.length > 1){
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }
}

const merge = (left, right) => {
    const mergedArr = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            mergedArr.push(left[i++]);
        }
        else {
            mergedArr.push(right[j++]);
        }
    }
    while(i < left.length){
        mergedArr.push(left[i++]);
    }
    while(j < right.length){
        mergedArr.push(right[j++]);
    }
    return mergedArr;
}

console.log(mergeSort([3, 2, 8, 1, 13, 8, 5, 0, 1, 90]));
console.log(mergeSort([105, 79, 100, 110, 201, 1, 8, 92, 32]));