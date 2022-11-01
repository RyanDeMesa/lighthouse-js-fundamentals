function calculateRectangleArea(length, width) {
  let areaR = length * width
  if (length < 0 || width < 0) {
    return undefined
  } else {
    return areaR
  }
}

function calculateTriangleArea(base, height) {
  let areaT = base * height / 2
  if (base < 0 || height <0) {
    return undefined
  } else {
    return areaT
  }
}

function calculateCircleArea(radius) {
  let areaC = Math.PI * Math.pow(radius, 2)
  if (areaC < 0 || radius < 0) {
    return undefined
  } else {
    return areaC
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined