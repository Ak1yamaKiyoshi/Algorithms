#include <stdio.h>

int main()
{
   const int SIZE = 20;
   int toSort[] = {3, 5, 7, 4, 8, 1, 4, 6, 4, 2, 7, 6, 8, 0, 9, 2, 3, 7, 4, 3, 2};
   int counters[] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

   for (int i = 0; i < SIZE; i++)
   {
       counters[toSort[i]] += 1;
   }

   printf("\n");
   int k = 0;
   for (int i = 0; i < 10; i++) {
       for (int j = 0; j < counters[i]; j++) {
           toSort[k] = i;
           k++;
       }
   }
   for (int i = 0; i < SIZE; i++) {
       printf("%d ", toSort[i]);
   }
   printf("\n");
   return 0;
}
