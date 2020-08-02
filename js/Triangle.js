class Triangle {
    // Creates a triangle with Vec3-Vertices v1, v2, v3
    constructor(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
        this.d1 = this.v2.minus(this.v1);
        this.d2 = this.v3.minus(this.v1);
        this.d3 = this.v3.minus(this.v2);
        this.normal = this.d1.cross(this.d2).normalized();
        this.height = this.normal.dot(this.v1);
    }
}
