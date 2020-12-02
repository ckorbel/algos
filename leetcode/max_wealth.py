def maximum_wealth(self, accounts):
    max = 0
    for i in range(len(accounts)):
        row_sum = 0
        for j in range(len(accounts[i])):
            row_sum += accounts[i][j]
            if row_sum > max:
                max = row_sum
    return max
