/**
 * Set - unordered collection of unique items
 * 
 * Properties:
 * - unordered
 * - unique
 * 
 * Implementations:
 * - C# - HashSet<T>
 * - Java - Set<E>
 * - JavaScript - Set
 * 
 * API:
 * - cloud include: intersection, union
 */

interface Set<T> {
    isSuperset(subset: Set<T>): boolean;

    union(subset: Set<T>): Set<T>;

    intersection(subset: Set<T>): Set<T>;
}

Set.prototype.isSuperset = function(subset: Set<any>) {
    for (var element of subset) {
        if (!this.has(element)) {
            return false;
        }
    }

    return true;
}

Set.prototype.union = function(subset: Set<any>): Set<any> {
    let unionSet = new Set(this);

    for (const element of subset) {
        unionSet.add(element);
    }

    return unionSet;
}

Set.prototype.intersection = function(subset: Set<any>): Set<any> {
    let intersectionSet = new Set();

    for (const element of subset) {
        if (this.has(element)) {
            intersectionSet.add(element);
        }
    }

    return intersectionSet;
}
