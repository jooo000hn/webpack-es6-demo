class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(p){
        this.x += p.x
        this.y += p.y;
    }

    toString() {
        return `point  : (${this.x}, ${this.y})`;
    }
}

export default Point;
