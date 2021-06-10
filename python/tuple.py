# tuple ordered, immutable, allows duplcate elements
# Tuples are used whenever you want to return multiple results from a function
# Since they're immutable, they can be used as keys for a dictionary (lists can't).
# Tuples make good dictionary keys when you need to combine more than one piece of data into your key and don't feel like making a class for it.
# a = {}
# a[(1,2,"bob")] = "hello!"
# a[("Hello","en-US")] = "Hi There!"

my_tuple = ("george", 24, "sf")
print(my_tuple)

tups = ("MAX") # be recognized as a string
tups_two = ("MAX",) # recognized as tuple
print(type(tups))
print(type(tups_two))

item = my_tuple[1] # access indexed order same as list
print(item)
print(my_tuple[-1]) # access last item -2 access second to last
print(len(my_tuple), my_tuple.count(24), my_tuple.index("george"))
# item[0] = "new value" # not possible because tuple is immutable

my_list = list(my_tuple) # now a list
back_to_tups = tuple(my_list) # back to tuple


# slice a tuple
nums = (1, 2, 3, 4, 5, 6, 7, 8, 9)
sliced_nums = nums[2:5] # goes from index 2 to 4 last index not included: 
steps_arg = nums[::2] # skils every other (1, 3, 5, 7, 9) 
reverse_tuple = nums[::-1] # reverses order
print(sliced_nums, steps_arg, reverse_tuple )

me = "Chris", 27, "San Jose"
name, age, location = me # num of elements must match tuple
print({name: name, age: age, location: location})

import sys, timeit
my_arr = [0, 1, 2, "hello", True]
my_tupl = (0, 1, 2, "hello", True)
print(sys.getsizeof(my_arr), "bytes") # 96 bytes
print(sys.getsizeof(my_tupl), "bytes") # 80 bytes tuple are more optimzied take less memory that lists
print(timeit.timeit(stmt="[0, 1, 2, 3, 4]", number=100000)) # 0.005938494000000001
print(timeit.timeit(stmt="(0, 1, 2, 3, 4)", number=100000)) # 0.0007467210000000023 tuples are faster


