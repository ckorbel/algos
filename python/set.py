# Sets unorder, mutable, no duplicates
# basically seems like dictionary except just keys instead of key, value pairs
# As an unordered collection type, set([8, 1, 6]) is equivalent to set([1, 6, 8]).

# While it might be nicer to display the set contents in sorted order, that would make the repr() call more expensive.

# Internally, the set type is implemented using a hash table: a hash function is used to separate items into a number of buckets to reduce the number of equality operations needed to check if an item is part of the set.

# To produce the repr() output it just outputs the items from each bucket in turn, which is unlikely to be the sorted order.
my_set = {1, 2, 3}
set_one = set([1, 2, 3])
set_two = set("hello")  # print {'h', 'l', 'o', 'e'}
print(my_set, type(my_set), set_one, set_two)

my_set.add(4)
my_set.remove(1)  # remove will error if item does not exist in set
my_set.discard(100)  # discard does same as remove but will not error
print(my_set)
# my_set.clear()  # empty the set
# my_set.pop()  # remove random element not super helpfufl

# loop
for i in my_set:
    print(i)

if 1 in my_set:
    print("yes there")

# unions and intersection:
odds = {1, 3, 5, 7, 9}
evens = {2, 4, 6, 8, 10}
primes = {2, 3, 5, 7}

union = odds.union(evens)
print(union)  # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# empty set {} since theres not intersection between the two
i = odds.intersection(evens)
inter = odds.intersection(primes)  # {3, 5, 7}
print(inter)

diff = odds.difference(primes)  # {1, 9}
print(diff)

sym_diff = odds.symmetric_difference(primes)  # {1, 2, 9}
print(sym_diff)  # return unshared values
# this unions and intersections return a new set immutable
