function merge(array, low, mid, high) {
    let n1 = low, n2 = mid + 1; k = 0;
    if ((high - low + 1) < 1) return;
    let arr = new Array(high - low + 1)

    for (let i = low; i <= high; i++) 
        if (n1 > mid)
            arr[k++] = array[n2++];
        else if (n2 > high)
            arr[k++] = array[n1++];
        else if (array[n1] < array[n2])
            arr[k++] = array[n1++];
        else
            arr[k++] = array[n2++];
    
    for (let i = 0; i < k; i++) 
        array[low++] = arr[i];
    return array;
}

function merge_sort(array, low, high) {
    if (low < high) {
        let mid = (low + high) / 2;
        array = merge_sort(array, low, mid);
        array = merge_sort(array, mid + 1, high);
        array = merge(array, low, mid, high);
    }
    return array;
}


let arr = new Array(4)
for (let i = 0; i < arr.length; i++) 
    arr[i] = Math.floor(Math.random() * 10) 


console.log(arr)
merge_sort(arr, 0, arr.length);
console.log(arr)