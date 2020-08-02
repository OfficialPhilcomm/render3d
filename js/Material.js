class Material {
  constructor(args) {
    args = args || {};
    this.color = args.color || {r: 255, g: 255, b: 255};
    this.reflectionRatio = args.reflectionRatio || 0;
  }
}
