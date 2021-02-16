# 0(m^2 * n)
# 0(m^2) m being the num of nums

def best_sum(target, nums):
    table = [None] * (target + 1)
    # seed value
    table[0] = []
    for i in range(target - 1):
        if table[i] != None: 
            for num in nums:
                if (i + num) <= len(table) - 1: 
                    if table[num + i] != None: 
                        # if there is a not None value it will be equal or shorter
                        # and so there's no reason to add 
                        continue
                    else: 
                        table[num + i] = [*table[i], num]
    return table[target]

print(best_sum(100, [1, 2, 5, 25]))
