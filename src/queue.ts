/**
 * Queue (FIFO queue) - collection based on first-in-first-out
 * 
 * API:
 * - enqueue(T)/add(T)
 * - dequeue(T)/remove(T)/poll(T)
 * - peek(T)/element(T)
 */
export class Queue<TItem> {

    queue: TItem[] = [];

    /**
     * @param  {TItem} item
     * @returns boolean true of item has beed added to queue.
     */
    add(item: TItem): boolean {
        this.queue.unshift(item);

        return true;
    }

    /**
     * @returns TItem first item from queue and removes it from queue.
     */
    poll(): TItem {
        return this.queue.pop();
    }

    /**
     * @returns TItem first item from queue, but does not remove it from queue;
     */
    peek(): TItem {
        // in current implementation we return null, but there are could be exception thrown as well.
        if (this.queue.length === 0) {
            return null;
        }

        return this.queue[this.queue.length - 1];
    }

    /**
     * @returns number size of queue.
     */
    size(): number {
        return this.queue.length;
    }
}