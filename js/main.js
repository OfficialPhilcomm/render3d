var camera;

// Settings
var rayLength;
var maxBounces;
var fov;

function setup() {
  // setup
  // camera = ?
  var t = new Triangle(new Vec3(0, 0, 0), new Vec3(0, 0, 1), new Vec3(0, 1, 0));
  var r = new Ray(new Vec3(-1, 0.3, 0.7), new Vec3(1, 0, 0));
  console.log(r.intersect(t));
}

function draw() {
  // per frame
}
