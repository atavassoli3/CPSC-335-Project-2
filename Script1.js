


var arr = ['0', 5, 'A', 6, 2, 7, 'B', 2, 'B' , 6, 0, 3];
//QuickSort(arr);
//mergeSort(arr);


// was using this to see if javascript passes arrays as reference
// console.log("arr before testing func: " , arr.toString());
// function testing (parr){

//     for (var i = 0; i < parr.length; i++){
//         parr[i] = 0;
//     }
// }
// testing(arr);
// console.log("arr after testing func: " , arr.toString());

console.log("Array before sort " , arr.toString());

function printArray(A) 
{ 
    var i; 

    for (i=0; i < A.length; i++) {
        console.log(A[i]);
    }
} 


function merge (arr, l, m, r) {

    console.log("in merge")
    var i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = [];
    var R = [];

    for (i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = arr[m + 1+ j]; 
    }

    
    console.log("\nL array is now \n", L.toString());
    console.log("\nR array is now \n", R.toString());
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 

    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 

    /* Copy the remaining elements of L[], if there 
       are any */
       while (i < n1) 
       { 
           arr[k] = L[i]; 
           i++; 
           k++; 
       } 
     
       /* Copy the remaining elements of R[], if there 
          are any */
       while (j < n2) 
       { 
           arr[k] = R[j]; 
           j++; 
           k++; 
       } 

}


function mergeSort(arr, l, r) 
{ 
    console.log("in mergeSort");
    // int arr_size = 12; 
   // printf("\nNew mergeSort call, printing array.");
   // printArray(arr, arr_size);
    if (l < r) 
    { 
        // Same as (l+r)/2, but avoids overflow for 
        // large l and h 
        var m = Math.floor(l+(r-l)/2); 
  
        // Sort first and second halves 
        mergeSort(arr, l, m); 
        // printArray(arr, array_Size);
        mergeSort(arr, m+1, r); 
        // printArray(arr, array_Size);
        merge(arr, l, m, r); 

    } 
} 


mergeSort(arr, 0, arr.length);

console.log("Array after sort " , arr.toString());






function setup() {

    createCanvas(1604, 1604);

}

function draw() {

    
    
}


// // Takes in an array, merges two sub arrays from it 
// // first sub array is passedArray[l ... m]
// // second sub array is passedArray [m+1 ... r]
// function merge(passedArray, l, m, r) {
    
    
//     var i, j, k; 
//     var n1 = m - l + 1; 
//     var n2 = r - m;


//     // create temporary arrays 
//     var LeftArray = [];
//     var RightArray = [];

//     for (var v = 0; v < n1; v++ ) {
//         LeftArray.push(0);
//     }

//     for (var x = 0; x < n2; x++ ) {
//         RightArray.push(0);
//     }
    

//     // copy data to temporary arrays left and right 
//     for (i = 0; i < n1; i++) {
//         LeftArray[i] = passedArray[l + i];
//     }

//     for (j = 0; j < n2; j++) {
//         RightArray[j] = arr[m + 1 + j];
//     }

//     // merge the temporary arrays back into passed Array 
//     i = 0; // initial index of first subarray
//     j = 0; // initial index of second subarray
//     k = l; // initial index of merged subarray

//     while (i < n1 && j < n2) {
//         if (LeftArray[i] <= RightArray[j]) {
//             passedArray[k] = LeftArray[i];
//             i++;
//         }
//         else {
//             passedArray[k] = RightArray[j];
//             j++;
//         }
//         k++;
//     }

//     //copy the remaining elements of Left Array, if there are any 
//     while (i < n1) {
//         passedArray[k] = LeftArray[i];
//         i++; 
//         k++;
//     }

//     //copy the remaining elements of Right Array, if there are any 
//     while (j < n2) {
//         passedArray[k] = RightArray[j];
//         j++;
//         k++;
//     }
//     // let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // // We will concatenate values into the resultArray in order
   
//     //     if (left[leftIndex] < right[rightIndex]) {
//     //         resultArray.push(left[leftIndex]);
//     //         leftIndex++; // move left array cursor
//     //     } else {
//     //         resultArray.push(right[rightIndex]);
//     //         rightIndex++; // move right array cursor
//     //     }

//     // for (i = 0; i < resultArray.length; i++) {
//     //     //print(resultArray[i]);
//     //     //console.log(resultArray[i]);
//     //     console.log("In merge, step, ", i, " are at ", resultArray[i], "array size: ", resultArray.length);
        
//     // }
//     // console.log("Finished merge, " , resultArray.toString());
//     // // We need to concat to the resultArray because there will be one element left over after the while loop
//     // return resultArray
//     //     .concat(left.slice(leftIndex))
//     //     .concat(right.slice(rightIndex));
// }


// // passedArray is the array to be sorted
// // l is for left index of subarray of passedArray
// // r is for right index of subarray of passedArray 
// function mergeSort(passedArray, l, r) {
//     // No need to sort the array if the array only has one element or empty
//    if (l < r) {
//        var m = Math.floor(1 + (r - 1) / 2);
//        console.log("l is ", l, "r is " , r, "middle is " , m);

//         mergeSort(passedArray, l, m);
//         mergeSort(passedArray, m+1, r);

//         merge(passedArray, l, m, r);
//    }
    
//     // if (unsortedArray.length <= 1) {
//     //     return unsortedArray;
//     // }
//     // // In order to divide the array in half, we need to figure out the middle
//     // const middle = Math.floor(unsortedArray.length / 2);

//     // // This is where we will be dividing the array into left and right
//     // const left = unsortedArray.slice(0, middle);
//     // const right = unsortedArray.slice(middle);

//     // // Using recursion to combine the left and right
//     // return merge(
//     //     mergeSort(left), mergeSort(right)
//     // );
// }



// function printArray (passedArray , size ) {
//     var i; 

//     for ( i = 0; i < size ; i++ ) {
//         console.log(passedArray[i].toString());
//     }

// }

// var arraySize = arr.length;
// console.log("Before merge sort : ", arr.toString());
// mergeSort(arr, 0, arraySize - 1);
// console.log("After merge sort : " , arr.toString())

function QuickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index

    if (len > 1) {

        index = partition(arr, left, right)

        if (left < index - 1) {
            QuickSort(arr, left, index - 1)
        }

        if (index < right) {
            QuickSort(arr, index, right)
        }

    }

    
    for (i = 0; i < arr.length; i++) {
        //print(arr[i]);
        //console.log(arr[i]);
        console.log("In quick, are at ", arr[i]);

    }
    console.log("Finished quick, " , arr.toString());


    return arr

}

function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,                 // Start pointer at the first item in the array
        j = right                 // Start pointer at the last item in the array

    while (i <= j) {

        // Move left pointer to the right until the value at the
        // left is greater than the pivot value
        while (arr[i] < pivot) {
            i++
        }

        // Move right pointer to the left until the value at the
        // right is less than the pivot value
        while (arr[j] > pivot) {
            j--
        }

        // If the left pointer is less than or equal to the 
        // right pointer, then swap values
        if (i <= j) {
            console.log(i, " is less than or equal to ", j, " so we are swapping.");
            console.log("Array before: ", arr.toString());
            [arr[i], arr[j]] = [arr[j], arr[i]]  // ES6 destructuring swap
            i++
            j--
            console.log("Array after: ", arr.toString());
        }
    }

    return i

}

function poresort1pass(a) {

    var n = a.length - 1;
    var x = a;

    //checks even (0,2,4,6...)
    for (var i = 0; i < n; i += 2) {
        if (x[i] < x[i + 1]) {
            var temp = x[i];
            x[i] = x[i + 1];
            x[i + 1] = temp;
        } 

    }

        //checks odd (1,3,5,7...)
        for (var i = 1; i < n; i += 2) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
            }
        }

        return x;
  }
