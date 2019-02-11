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
    * With fixed array it makes sense to implement circular queue (to save a bit of memory)
  * Complexity:
    * - push - O(1), but depending on implementation, could be O(n)
    * - peek/poll - O(n), but the same, could be O(1)

* Stack - LIFO queue
  * Complexity:
    * - push - O(1), but depending on implementation, could be O(n)
    * - peek/pop - O(n), but the same, could be O(1)

* Linked List - represents sequence of linked items
  * Node - could hold any kind of data, it includes
    * TItem item - current item
    * Node next - reference to the next node 
  * Use cases
    * Array won't be good for inserts, while linked link have O(1)
  * Complexity
    * Insert/Delete - O(1)
    * Access/Search - O(n)

* Double Linked List -

## Algorithms Analysis

Scientiﬁc method:
* Observe some feature of the natural world, generally with precise measurements.
* Hypothesize a model that is consistent with the observations.
* Predict events using the hypothesis.
* Verify the predictions by making further observations.
* Validate by repeating until the hypothesis and observations agree.

f(n) order of growth (whole time complexity is available at: https://en.wikipedia.org/wiki/Time_complexity):
* 1 - constant, like insert, add and etc.
* log N - logarithmic (https://en.wikipedia.org/wiki/Logarithmic_growth, typically 'y = c log (x)'), like binary search.
* N - linear, like find maximum
* N log N - like mergesort
* N(2) - quadratic, like double loop
* N(3) - cubic, like triple loop
* 2(N) - exponential, 



