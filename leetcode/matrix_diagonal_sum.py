def max_diagonal_sum(mat):
    sum = 0
    corner = 0
    matrix_length = len(mat)
    while corner < matrix_length:
        sum += mat[corner][corner]
        mat[corner][corner] = 0
        corner += 1

    height = 0
    corner = len(mat) - 1
    while height < matrix_length:
        sum += mat[height][corner]
        height += 1
        corner -= 1
    return sum


mat = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]

print(max_diagonal_sum(mat))
