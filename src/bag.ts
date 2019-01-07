/**
 * Bag - unordered collection of items (implemented in Java - Bag, in C# - ConcurrentBag<T>)
 * Purpose is to provide client with ability to add and iterate over items. Therefore there are no remove method.
 * 
 * There are two types of bags:
 * - homogeneous - items has the same type
 * - heterogeneous - items has different type
 */
export class Bag<TItem> implements Iterator<TItem> {

    // internal array to store bag items (as option linked list, dictionary or hash set could be used )
    bag: TItem[] = [];

    // used for iteration
    iterator = 0;

    /**
     * @param  {TItem} item - add item to the bag.
     * @returns boolean - true, if item has been added.
     */
    add(item: TItem): boolean {
        this.bag.push(item)

        return true;
    }

    /**
     * @returns number - number of items in bag.
     */
    size(): number {
        return this.bag.length;
    }

    /**
     * @returns boolean - true, bag is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this.bag.length === 0;
    }

    next(): IteratorResult<TItem> {
        if (this.iterator < this.bag.length) {
            return {
                done: false,
                value: this.bag[this.iterator++]
            }
        }

        // reset iterator
        this.iterator = 0;

        return {
            done: true,
            value: null
        };
    }

    [Symbol.iterator](): IterableIterator<TItem> {
        return this;
    }
}