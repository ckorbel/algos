def two_sum(nums, target):
    tracker = {}
    difference = 0
    for x in range(len(nums)):
        difference = target - nums[x]
        if difference in tracker:
            return [tracker[difference], x]
        if nums[x] in tracker:
            print("do nothing")
        else:
            tracker[nums[x]] = x


list = [3, 3]
print(two_sum(list, 6))
