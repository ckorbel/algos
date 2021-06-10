my_list = ["cherry", "apple"]
print(my_list)
item = my_list[1]


my_list_two = list()
print(my_list_two)

nums = [1, 2, 3, 4, 5, 6, 7, 8]
print(nums[0:3])
print(nums[::1]) # every item
print(nums[::2]) # every second item
print(nums[::-1]) # reverse list


#copy 
list_org = ["orage", "cherry", "apple"]
copy = list_org ## saved in memory by reference
real_copy = list_org.copy() # equivalent for spread [...arr]
also_copy = list(list_org) # creates copy 
sliced_copy = list_org[:] #slice begint to end also makes copy()
copy[1] = "not  a fruit" ## both lists changed
print(list_org, copy)
print(real_copy, sliced_copy) # saved original form
#list comprehension create new list from existing list: 
a = [1, 2, 3, 4, 5, 6]
b = [i * i for i in a]
print(b)