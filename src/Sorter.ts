export interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number):boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sort {
    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number):boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        const {length} = this;
        for (let k = 1; k < length; k++) {
            for (let i=0; i < length - i; i++) {
                if (this.compare(i, i+1)) {
                    this.swap(i, i+1);
                }
            }
        }
    }
}