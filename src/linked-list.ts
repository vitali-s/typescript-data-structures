/**
 * Linked List data structure
 */
export class LinkedList<TItem> {
    public firstItem: LinkedListNode<TItem> | null = null;
    
    private length: number = 0;

    add(item: TItem, index?: number): boolean {
        let node: LinkedListNode<TItem> = {
            item: item,
            next: null
        };

        // index is out of list range
        if (index < 0 || index > this.length) {
            return false;
        }

        if (this.length === 0) {
            this.firstItem = node;
        } else {
            const previousNode = this.nodeAtIndex(index - 1);

            previousNode.next = node;
        }

        this.length++;
    }

    public size(): number {
        return this.length;
    }

    private nodeAtIndex(index: number): LinkedListNode<TItem> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let node = this.firstItem;

        for (let i = 0; i < index && node !== null; i++) {
            node = node.next;
        }

        return node;
    }
}

export class LinkedListNode<TItem> {
    public item: TItem;
    public next: LinkedListNode<TItem>;
}