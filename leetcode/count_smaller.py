# 0(n) time because
# takes advantange of knowing that the nums will breakpoint within a range of 1-100 and then creates an array with 100 indexs adds a 1 at each index which exists in nums then iterates through incrementing the count so count would be like:
# nums = [2,3]
# [0,0,1,1,0,0 etc] to => [0,0,1,2,2,2,etc]
# then each num will be able to look up the num smaller at counts index
# only way to get 0(n) otherwise need to sort

def smaller_numbers_than_current(nums):
    count = [0] * 102
    for num in nums:
        count[num+1] += 1
    for i in range(1, 102):
        count[i] += count[i-1]
    result = []
    for num in nums:
        result.append(count[num])
    return result

# 0(n) time
# Space: O(n + 100) drop 100 = 0(n)


print(smaller_numbers_than_current([6, 5, 4, 8]))
