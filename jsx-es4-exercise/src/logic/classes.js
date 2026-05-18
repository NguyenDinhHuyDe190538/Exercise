class Shape {
  constructor(color) {
    this.color = color;
  }
  getArea() { return 0; }
  toString() {
    return `Shape color: ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
}

export { Shape, Rectangle, Triangle };