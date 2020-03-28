#include<stdlib.h> 
#include<stdio.h> 
#include<ctype.h>
  


/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size) 
{ 
    int i; 

    for (i=0; i < size; i++) 
        if (isalpha(A[i])) {
            printf("%c ", A[i]);
        } else {
            printf("%d ", A[i]); 
        }
    printf("\n"); 
} 


// Merges two subarrays of arr[]. 
// First subarray is arr[l..m] 
// Second subarray is arr[m+1..r] 
void merge(int arr[], int l, int m, int r) 
{ 
    int i, j, k; 
    int n1 = m - l + 1; 
    int n2 =  r - m; 

    if (n1 == 1) printf("\nn1 == 1\n");
    if (n2 == 1) printf("\nn2 == 1\n");
  
    /* create temp arrays */
    int L[n1], R[n2]; 
  
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 
  
    printf("\nL array is now \n");
    printArray(L, n1);
    printf("\nR array is now \n");
    printArray(R, n2);
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
  



int array_Size = 12;
/* l is for left index and r is right index of the 
   sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r) 
{ 
    // int arr_size = 12; 
   // printf("\nNew mergeSort call, printing array.");
   // printArray(arr, arr_size);
    if (l < r) 
    { 
        // Same as (l+r)/2, but avoids overflow for 
        // large l and h 
        int m = l+(r-l)/2; 
  
        // Sort first and second halves 
        mergeSort(arr, l, m); 
        // printArray(arr, array_Size);
        mergeSort(arr, m+1, r); 
        // printArray(arr, array_Size);
        merge(arr, l, m, r); 
        printArray(arr, array_Size);

    } 
    else {
        printf("\nWe are at a point where l < r, printing array\n");
        printArray(arr, array_Size);
    }
} 
  

  
/* Driver program to test above functions */
int main() 
{ 
    int arr[] = {'0', 5, 'A', 6, 2, 7, 'B', 2, 'B' , 6, 0, 3}; 
    int arr_size = sizeof(arr)/sizeof(arr[0]); 
  
    printf("Given array is \n"); 
    printArray(arr, arr_size); 
  
    mergeSort(arr, 0, arr_size - 1); 
  
    printf("\nSorted array is \n"); 
    printArray(arr, arr_size); 
    return 0; 
} 