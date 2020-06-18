class Vec4 {
    constructor(x, y, z, w) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // Returns the dot product of the vector with another vector
    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    }
}