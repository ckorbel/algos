class HashTable {
  table = new Array(3);
  numItems = 0;

  hasStringToInt = (str, tableSize) => {
    // should be a prime number
    let hash = 17;
    for (let i = 0; i < str.length; i++) {
      hash = (13 * hash * str.charCodeAt(i)) % tableSize;
    }
    console.log({ hash });
    return hash;
  };

  // pretty expensive to resize everything gets re-hashed with new size
  // best to intialize the array at a large size
  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, val]) => {
          const index = this.hasStringToInt(key, newTable.length);
          if (newTable[index]) {
            newTable[index].push([key, val]);
          } else {
            newTable[index] = [[key, val]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, val) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      // resize
      console.log("HELLO");
      this.resize();
    }
    const index = this.hasStringToInt(key, this.table.length);
    // collison handling
    // usually a linked list
    if (this.table[index]) {
      this.table[index].push([key, val]);
    } else {
      this.table[index] = [[key, val]];
    }
  };

  getItem = (key) => {
    const index = this.hasStringToInt(key, this.table.length);
    if (!this.table[index]) {
      return null;
    }

    return this.table[index].find((item) => item[0] === key)[1];
  };
}

const myTable = new HashTable();
console.log(myTable.table.length);
myTable.setItem("firstName", "Bob");
myTable.setItem("lastName", "Jones");
myTable.setItem("age", 30);
myTable.setItem("dob", "12/31/1933");
console.log(myTable.table.length);
