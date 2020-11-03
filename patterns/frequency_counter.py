def same(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    squared = {}
    for x in arr1:
        square = x * x
        if square in squared:
            squared[square] = squared[square] + 1
        else:
            squared[square] = 1

    for i in arr2:
        if i in squared:
            if squared[i] >= 1:
                squared[i] -= 1
            else:
                print(squared[i], i)
                return False
        else:
            return False
    return True


def valid_anagram(str1, str2):
    if len(str1) != len(str2):
        return False
    tracker = {}
    for x in str1:
        if x in tracker:
            tracker[x] = tracker[x] + 1
        else:
            tracker[x] = 1

    for i in str2:
        if i in tracker:
            if tracker[i] >= 1:
                tracker[i] = tracker[i] - 1
            else:
                return False
        else:
            return False
    return True


print(valid_anagram('anagram', 'nagaram'))


same([1, 2, 3, 2], [9, 1, 4, 4])
