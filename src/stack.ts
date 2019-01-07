/**
 * Stack (LIFO queue)
 */
export class Stack<TItem> {

    // internal array to store stack items.
    stack: TItem[] = [];

    /**
     * @param  {TItem} item adds item to stack.
     */
    push(item: TItem) {
        this.stack.push(item);
    }

    /**
     * @returns TItem item from stack and removes it.
     */
    pop(): TItem {
        return this.stack.pop();
    }

    /**
     * @returns TItem item from stack and does not remove it.
     */
    peek(): TItem {
        if (this.stack.length === 0) {
            return null;
        }

        return this.stack[this.stack.length - 1]
    }

    /**
     * @returns number of elements in stack.
     */
    size(): number {
        return this.stack.length;
    }
}