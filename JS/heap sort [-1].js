


function heapify(array, len, root) {
    let max = root, left = (2*root)+1, right = (2*root)+2;
    // root must be largest element

    // if left child or right child is larger than root 
    // we change max index
    if (left < len && array[root] < array[left]) 
        max = left;
    if (right < len && array[max] < array[right]) 
        max = right;
    
    // and if max index != root, we swap max index with root
    // so it will be max in subtree
    if (max != root) {
        array[root] = array.splice(max, 1, array[root])[0]
        heapify(array, len, max);
    }
}

function heapSort(array) {
    // myArray[index1] = myArray.splice(index2, 1, myArray[index1])[0];
    
    // heapify initial array
    for (let i = array.lenght/2; i >=0; i--) 
        heapify(array, array.lenght, i);

    // heapify lesser and lesser slice of array, 
    // gradually swapping max element (after heapify) to end of array
    for (let i = array.lenght-1; i >=0 ; i--) {
        array[0] = array.splice(i, 1, array[0])[0]
        heapify(array, i, 0);
    }
    
}

var array = new Array(8)

for (let i = 0; i < array.length; i++) 
    array[i] = Math.floor(Math.random() * 10) 


console.log(array)
heapSort(array);
console.log(array)