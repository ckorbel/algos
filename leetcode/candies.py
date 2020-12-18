def kidsWithCandies(candies, extra_candies):
    max = candies[0]
    output = []
    for x in candies:
        if x > max:
            max = x

    for i in candies:
        if (i + extra_candies) >= max:
            output.append(True)
        else:
            output.append(False)
    return output
