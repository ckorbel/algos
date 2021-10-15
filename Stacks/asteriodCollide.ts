// Input: asteroids = [5, 10, _,  ]
// Output: [5,10]

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    const currentAsteroid = asteroids[i];

    if (currentAsteroid > 0) {
      stack.push(currentAsteroid);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(currentAsteroid)
      ) {
        stack.pop(); // keep popping off the stack until 1 of the 3 is no longer true
      }
      // if stack is not empty and top is equal size destroy each other
      if (
        stack.length &&
        stack[stack.length - 1] === Math.abs(currentAsteroid)
      ) {
        stack.pop();
      }
      // if stack is empty
      // OR top is negative
      else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(currentAsteroid);
      }
    }
  }
  return stack;
}
