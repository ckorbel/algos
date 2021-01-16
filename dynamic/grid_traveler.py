def grid_travler(rows, columns):
  if rows == 1 and columns == 1: 
    return 1
  if rows == 0 or columns == 0:
    return 0
  return grid_travler(rows -1, columns) + grid_travler(rows, columns - 1); 

print(grid_travler(2,3))