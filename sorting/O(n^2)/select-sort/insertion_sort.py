def insertion_sort(arr):
    for index in range(1, len(arr)):

        currentvalue = arr[index]
        position = index

        while position > 0 and arr[position - 1] > currentvalue:
            arr[position] = arr[position - 1]
            position = position - 1

        arr[position] = currentvalue


unsorted_array = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertion_sort(unsorted_array)
print(unsorted_array)
