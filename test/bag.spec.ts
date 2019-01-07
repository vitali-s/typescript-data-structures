import { Bag } from "../src/bag";
import { expect } from "chai";

describe('Bag', () => {
    let bag: Bag<number>;

    beforeEach(() => {
        bag = new Bag<number>();
    });

    it('should be empty when initialized', () => {
        expect(bag.isEmpty()).to.be.true;
    });

    it('should contain item when item has been added', () => {
        bag.add(5);

        for (const key of bag) {
            expect(key).to.equal(5);
        }
    });

    it('should allow to iterate over collection', () => {
        bag.add(5);
        bag.add(7);
        bag.add(11);

        let result = [];

        for (const key of bag) {
            result.push(key);
        } 

        expect(result).to.eql([5, 7, 11]);
    });
});