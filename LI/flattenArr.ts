const nonFlatArr: any = [[1, 2], 3, 4, [5, [6, 7]]];

const flatten = (arr) => {
  let results = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      results = results.concat(flatten(element));
    } else {
      results.push(element);
    }
  });

  return results;
};

console.log(flatten(nonFlatArr));
