#include <iostream>

void countingSort(int *array, const int LEN) {
    int counters[10] = {0};

    for (int i = 0, element = 0; i < LEN; i++) {
        element = array[i];
        counters[element]++;
    }

    for (int i = 0, k = 0; i < 10; i++) 
       for (int j = 0; j < counters[i]; j++) 
           array[k++] = i;
}

int main()
{
    const int LEN = 20;
    int toSort[] = {3, 5, 7, 4, 8, 1, 4, 6, 4, 2, 7, 6, 8, 0, 9, 2, 3, 7, 4, 3, 2};
    
    // print array 
    for (int& element: toSort) 
        std::cout << element << " ";

    countingSort(&toSort[0], LEN);
    
    // print array 
    std::cout << "\n";
    for (int& element: toSort) 
        std::cout << element << " ";

   printf("\n");
   return 0;
}
