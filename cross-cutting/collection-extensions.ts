interface Array<T> {
    fillWith(rows: number, columns: number, value: any): void;
}

Array.prototype.fillWith = function(rows: number, columns: number, value: any) {
    for (let row = 0; row < rows; row++) {
        this[row] = [];
        for (let column = 0; column < columns; column++) {
            this[row][column] = value;
        }
    }
}