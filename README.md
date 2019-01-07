# Data structures in TypeScript

Data structures implementations for TypeScript

## Collections

* Bag - unordered collection of items with duplicates
  * Use cases
    * Allows clients to iterate over unordered elements (just as a bag)
    * Immutable in classic implementation (could not be modified)
    * Typically could be replaced with Array/List (depending on language)
  * Implementations based on: 
    * Dynamic Array
    * Linked List
  * Complexity:
    * Access (by iterator, just return next item) - O(1)
    * Add - O(1)
    * Size/ IsEmpty - O(1)


* Set - unique unordered collection of items
  * Use cases
    * Typically include: union, subset, intersection
    * Unordered, unique
    * Implemented in many languages as Set, HashSet
  * Complexity
    * Access (by iterator, just return next item) - O(1)
    * Add - O(1)
    * Size/ IsEmpty - O(1)


* Queue - FIFO queue
  * Use cases
    * With fixed array it makes sense to implement circular queue
  * Complexity:
    * - push - O(1), but depending on implementation, could be O(n)
    * - peek/poll - O(n), but the same, could be O(1)

* Stack - LIFO queue
 * Complexity:
    * - push - O(1), but depending on implementation, could be O(n)
    * - peek/pop - O(n), but the same, could be O(1)

* Linked List -
* Double Linked List -


