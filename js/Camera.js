class Camera {
  constructor() {
    this.pos = new Vec3(0, 0, 0);
    this.rotation = 0; // TODO: implement rotation
  }

  function getImage(width, height) {
    let result = [];

    for(let x of width) {
      let xArray = [];
      for(let y of height) {
        xArray.push(); // TODO: implement pixel color
      }
      result.push(xArray);
    }
  }
}
