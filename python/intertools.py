# itertools: product, permutations, combinations, accumlate, groupby, and infinite iterators
from itertools import combinations, combinations_with_replacement, accumulate
from itertools import combinations
from itertools import product

a = [1, 2]
b = [3, 4]

prod = product(a, b)
print(list(prod))  # [(1, 3), (1, 4), (2, 3), (2, 4)]


a = [1, 2, 3]
comb = combinations(a, 2)  # generate all possible combinations

print(list(comb))


a = [1, 2, 3]
comb = combinations(a, 2)  # generate all possible combinations

# print(list(comb))
comb_wr = combinations_with_replacement(a, 2)
# print(list(comb_wr)) #[(1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3)]

print(a)  # [1, 2, 3]
acc = accumulate(a)
print(list(acc))  # [1, 3, 6]
