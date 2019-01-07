import { expect } from "chai";
import './../src/set';

describe('Set', () => {
    it('should be empty when initialized', () => {
        let set = new Set([0, 1, 3, 5, 7, 7])

        expect(set.has(7)).to.be.true;
    });

    describe('isSuperset', () => {
        it('should return true when set is superset', () => {
            let set = new Set([0, 1, 3, 5, 7, 7]);
            let superset = new Set([0, 1, 7]);
    
            expect(set.isSuperset(superset)).to.be.true;
        });

        it('should return false when set is not superset', () => {
            let set = new Set([0, 1, 3, 5, 7, 7]);
            let superset = new Set([0, 1, 9]);
    
            expect(set.isSuperset(superset)).to.be.false;
        });
    });

    describe('union', () => {
        it('should return union of two sets', () => {
            let set1 = new Set([0, 1]);
            let set2 = new Set([1, 3]);

            let unionSet = set1.union(set2);

            expect(unionSet).to.eql(new Set([0, 1, 3]));
        });
    });

    describe('intersection', () => {
        it('should return intersection of two sets', () => {
            let set1 = new Set([0, 1, 3]);
            let set2 = new Set([1, 3, 5]);

            let intersectionSet = set1.intersection(set2);

            expect(intersectionSet).to.eql(new Set([1, 3]));
        });
    });


});