

var mergeHolder = [];
var arr = ['0', 5, 'A', 6, 2, 7, 'B', 2, 'B' , 6, 0, 3];

//convert all the values to strings to make sorting work properly 
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString();
}
//QuickSort(arr);
//mergeSort(arr);

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


    /* create temp arrays */
    var L = [];
    var R = [];



/* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = arr[m + 1+ j]; 
    }

    
    console.log("\nL array is now \n", L.toString());
    mergeHolder.push(L.toString());
    console.log("\nR array is now \n", R.toString());
    mergeHolder.push(R.toString());

    console.log("\nPrinting Holder");

    console.log(mergeHolder);


    /* Merge the temp arrays back into arr[l..r]*/
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


mergeSort(arr, 0, arr.length-1);
mergeHolder.push(arr.toString());

console.log("Array after sort " , arr.toString());






function setup() {

    createCanvas(1604, 1604);

}

function draw() {
    background(255);

    //moved all the code which was previously in the draw function
    //to setVal() just to make it eaiser to use draw()

    noLoop();
}


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
