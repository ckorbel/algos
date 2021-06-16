#lambda arugments: expression
# used with higher order function function which take a funct as an argument
# similar to JS annoymous arrow function such as:
# .forEach(() => {})

from functools import reduce
points2D = [(1, 2), (15, 1), (5, -1), (10, 4)]
points2D_sorted = sorted(points2D)  # sorted by first arg
point_custom_sort2D = sorted(points2D, key=lambda x: x[1])

print(points2D)  # [(1, 2), (15, 1), (5, -1), (10, 4)]
print(points2D_sorted)  # [(1, 2), (5, -1), (10, 4), (15, 1)]
print(point_custom_sort2D)  # [(5, -1), (15, 1), (1, 2), (10, 4)]


a = [1, 2, 3, 4, 5]
b = map(lambda x: x * 2, a)
# same as:
c = [x * 2 for x in a]  # c seems to be preferred
print(list(b), list(c))


filtered = filter(lambda x: x % 2 == 0, a)
filltered_better = [x for x in a if x % 2 == 0]  # same as above
# js version: a.filter(x => x % 2 == 0);
print(list(filtered), list(filltered_better))


reduc_example = reduce(lambda x, y: x * y, a)
print(reduc_example)
