import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

const MAX_SIZE: number = 5;

export class CircularQueue<TItem> {

    // while it is not fixed array, we will just use it for example
    queue: TItem[] = new Array(MAX_SIZE);
    head: number = 0;
    tail: number = 0;

    enqueue(item: TItem): boolean {
        if (this.isFull()) {
            return false;
        }

        this.queue[this.tail] = item;

        this.tail = (this.tail + 1) % MAX_SIZE;

        return true;
    }

    dequeue(): TItem {
        if (this.isEmpty()) {
            return null;
        }

        let item = this.queue[this.head];
        this.queue[this.head] = null;

        this.head = (this.head + 1) % MAX_SIZE;

        return item;
    }

    isEmpty(): boolean {
        let isEmpty = true;

        for (const item of this.queue) {
            if (item) {
                isEmpty = false;
            }
        }
        
        return isEmpty;
    }

    isFull(): boolean {
        let size = 0;

        for (const item of this.queue) {
            if (item) {
                size++;
            }
        }

        return size === this.queue.length;
    }

    size(): number {
        let size = 0;

        for (const item of this.queue) {
            if (item) {
                size++;
            }
        }

        return size;
    }
}