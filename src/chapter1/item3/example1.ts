class Square {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
}

class Rectangle extends Square {
  height: number;

  constructor(width: number, height: number) {
    super(width);

    this.height = height;
  }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  }
  return shape.width * shape.width;
}
