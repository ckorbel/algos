import math

sorted_arr = [1, 5, 6, 8, 9, 22, 44, 56, 77, 88]

def binary_search(arr, target):
  start = 0
  end = len(arr) - 1
  while start <= end:
    middle = math.floor((start + end) / 2)

    if arr[middle] < target:
      start = middle + 1
    elif arr[middle] > target:
      end = middle - 1
    else: 
      return middle
  
  return None

print(binary_search(sorted_arr, 22))