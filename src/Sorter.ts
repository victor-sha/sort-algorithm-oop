export interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number):boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export class Sort {
    constructor(public collection: Sortable) {}

    sort(): void {
        const {length} = this.collection;
        for (let k = 1; k < length; k++) {
            for (let i=0; i < length - i; i++) {
                if (this.collection.compare(i, i+1)) {
                    this.collection.swap(i, i+1);
                }
            }
        }
    }
}