// recursive solution linear space
class Vector2D {
  constructor(vec) {
    this.flattenVec = [];
    this._flatten(vec);
  }

  next() {
    if (this.hasNext()) {
      return this.flattenVec.shift();
    }
    return null;
  }

  hasNext() {
    return this.flattenVec.length > 0;
  }

  _flatten(vec) {
    vec.forEach((item) => {
      if (Array.isArray(item)) {
        this._flatten(item);
      } else {
        this.flattenVec.push(item);
      }
    });
  }
}

// iterative solution constant space
class Vector2D {
  constructor(vec) {
    this.vec = vec;
    this.row = 0;
    this.col = 0;
  }

  next() {
    if (this.hasNext()) {
      return this.vec[this.row][this.col++];
    }
  }

  hasNext() {
    while (
      this.row < this.vec.length &&
      this.col === this.vec[this.row].length
    ) {
      this.col = 0;
      this.row++;
    }
    return this.row < this.vec.length;
  }
}
