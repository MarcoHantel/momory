export class Card {
    value: string;
    isMatched: boolean = false;
    isFlipped: boolean = false;

    constructor(value: string) {
        this.value = value;
    }

    flip() {
        if (!this.isMatched) {
            this.isFlipped = !this.isFlipped;
        }
    }

    setMatched() {
        this.isMatched = true;
    }

    reset() {
        this.isFlipped = false;
    }

    compareTo(other: Card): boolean {
        return this.value === other.value;
    }
}