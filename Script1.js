

var goldHolder = [];
var quickHolder = [];
var mergeHolder = [];

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(226);
    text("GOLD PORESORT", 100, 100);
    text("MERGESORT", 340, 100);
    text("QUICKSORT", 540, 100);
}




function poresort(a) {

    var n = a.length - 1;
    var x = a;
    var swap;

    do {
        swap = false;
        //checks even (0,2,4,6...)
        for (var i = 0; i < n; i += 2){
           
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
                goldHolder.push(x.toString());

            }

        }

        //checks odd (1,3,5,7...)
        for (var i = 1; i < n; i += 2) {
           
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
                goldHolder.push(x.toString());
               
            }
        }
    
  
    } while (swap)

    return x;
}


function quickSort(items, left = 0, right = items.length - 1) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
         
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);

        }
    }

    return items;
}
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            quickHolder.push(items.toString());
            i++;
            j--;
        }
    }
    return i;
}




function merge(arr, l, m, r) {

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
        R[j] = arr[m + 1 + j];
    }

  


    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    mergeHolder.push(arr.toString());
}
function mergeSort(arr, l = 0, r = arr.length - 1) {
 

    // int arr_size = 12;
    // printf("\nNew mergeSort call, printing array.");
    // printArray(arr, arr_size);
    if (l < r) {
        // Same as (l+r)/2, but avoids overflow for 
        // large l and h 
        var m = Math.floor(l + (r - l) / 2);

        // Sort first and second halves 
        mergeSort(arr, l, m);
      
        // printArray(arr, array_Size);
        mergeSort(arr, m + 1, r);
   
        // printArray(arr, array_Size);
        merge(arr, l, m, r);

    }

 
} 


