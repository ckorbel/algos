const obj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    1: "test",
    c: 2,
    4: {
      test: "hello",
    },
  },
};

const flatDict = (dict) => {
  const results = {};

  function flatten(dict, parentKey = "") {
    for (let key in dict) {
      const newKey = parentKey.length > 0 ? parentKey + "." + key : key;
      if (dict[key].constructor === Object) {
        flatten(dict[key], newKey);
      } else {
        // essentially functions as base case
        results[newKey] = dict[key];
      }
    }
  }
  flatten(dict, "");
  return results;
};

console.log(flatDict(obj));
