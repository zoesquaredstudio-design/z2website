// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(100, 100, WEBGL);

  describe('A white sphere on a gray background.');
}

function draw() {
  background(150);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the ellipsoid.
  // Set its radiusX to 30.
  ellipsoid(30);
}

