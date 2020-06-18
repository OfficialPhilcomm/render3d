class Ray {
    // Creates a ray that begins in the Vec3 source and goes into the Vec3 direction
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction.normalized();
    }

    // Returns the intersection point of the ray and the triangle or null if they do not intersect
    intersect(triangle) {
        var direction_normal_component = this.direction.dot(triangle.normal);

        if (direction_normal_component == 0) {
            return null;
        }

        var origin_normal_component = this.origin.dot(triangle.normal);
        
        // Want to have: intersection_point = origin + s * direction
        var s = (triangle.height - origin_normal_component) / direction_normal_component;

        if (s <= 0) {
            return null;
        }
        
        var intersection_point = this.origin.plus(this.direction.scale(s));

        if (triangle.v2.minus(intersection_point).cross(triangle.d1).dot(triangle.normal) < 0 ||
        triangle.d3.cross(intersection_point.minus(triangle.v2)).dot(triangle.normal) < 0 ||
        intersection_point.minus(triangle.v1).cross(triangle.d2).dot(triangle.normal) < 0) {
            return null;
        }

        return intersection_point;
    }
}