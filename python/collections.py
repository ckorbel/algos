# collections: counter, namedtuple, orderdict, defaultdict, deque

# Counter
from collections import deque
from collections import defaultdict
from collections import Counter, namedtuple, OrderedDict
a = "aaaaaabbbbcccc"
my_counter = Counter(a)
print(my_counter)  # Counter({'a': 6, 'b': 4, 'c': 4})
# print(my_counter.keys()) #dict_keys(['a', 'b', 'c'])
# print(my_counter.values()) #dict_values([6, 4, 4])
print(my_counter.most_common(1))  # [('a', 6)]
print(list(my_counter.elements()))  # convert to list


Point = namedtuple("Point", 'x,y')
pt = Point(1, -4)
print(pt, pt.x, pt.y)

# like regular dict but remember order of insertion
# python 3.7 regular dict remembers order as well

ordered_dict = OrderedDict()
# 3.7 regular dict tracks order as well
ordered_dict['first'] = 1
ordered_dict['second'] = 2
ordered_dict['third'] = 3
print(ordered_dict)


d = defaultdict(int)
d['a'] = 1
d['b'] = 2
print(d, d['a'])
print(d['c'])  # will return a default value instead of throw error


# Deques have O(1) speed for appendleft() and popleft() while lists have O(n) performance for insert(0, value) and pop(0).


d = deque()
d.append(1)
d.append(2)

d.appendleft(3)
print(d)

d.pop()
print(d)
d.popleft()
# d.extend([4,5,6]) # add elements to right side
# d.extendleft([4,5,6]) #deque([6, 5, 4, 1])
d.rotate(1)
print(d)
