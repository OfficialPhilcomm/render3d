class Vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    plus(other) {
        return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z)
    }

    minus(other) {
        return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z)
    }

    scale(scalar) {
        return new Vec3(scalar * this.x, scalar * this.y, scalar * this.z);
    }

    // Returns the cross product of the vector with another vector
    cross(other) {
        return new Vec3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
    }

    // Returns the dot product of the vector with another vector
    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    // Returns the length of the vector
    length() {
        return sqrt(this.length_squared());
    }

    length_squared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    
    normalized() {
        if (this.length() == 0) {
            return new Vec3(0, 0, 0);
        }
        return this.scale(1/this.length());
    }
}