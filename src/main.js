class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  merge() {
    console.log(1)
  }

  remove() {
    return 'hello world'
  }
}