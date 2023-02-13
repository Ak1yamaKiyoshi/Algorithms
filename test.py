import quick_sort # MY
import quicksort # OO
import random as rd
import time

array_ = [[rd.randint(0, 900) for _ in range(0, 900)] for _ in range(0,5000)]
array =  [[rd.randint(0, 900) for _ in range(0, 900)] for _ in range(0,5000)]

# OO
begin = time.time()
for i in array:
    #print(f" oo: {quicksort.quick_sort(i, 0, len(i) - 1)}")
    quicksort.quick_sort(i, 0, len(i) - 1)
end = time.time()

# MY
begin_ = time.time()
for i in array_:
    #print(f" my: {quick_sort.quick_sort(i, 0, len(i) - 1)}")
    quick_sort.quick_sort(i, 0, len(i) - 1)
end_ = time.time()

print(f" OO: {end-begin} MY: {end_-begin_}")

