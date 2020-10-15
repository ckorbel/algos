def remove_element(nums, val):
    counter = 0
    while counter < len(nums):
        if(nums[counter] is val):
            nums.pop(counter)
        else:
            counter += 1
    return len(nums)


remove_element([3, 2, 2, 3], 3)
