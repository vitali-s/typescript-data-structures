import { Stack } from './../src/stack';
import { expect } from 'chai';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    it('should be empty when initialized', () => {
        expect(stack.size()).to.equal(0);
    });

    describe('push', () => {
        it('should return 1 item when item has been added', () => {
            stack.push(1);

            expect(stack.size()).to.equal(1);
        });
    });

    describe('pop', () => {
        it('should return last item which has been added', () => {
            stack.push(3);
            stack.push(5);

            let item = stack.pop();

            expect(item).to.equal(5);
        });

        it('should have 1 item when 1 of 2 items has been popped', () => {
            stack.push(3);
            stack.push(5);

            stack.pop();

            expect(stack.size()).to.equal(1);
        });
    });

    describe('peek', () => {
        it('should return last item which has been added', () => {
            stack.push(3);
            stack.push(5);

            let item = stack.peek();

            expect(item).to.equal(5);
        });

        it('should have 2 items when 1 of 2 items has been peeked', () => {
            stack.push(3);
            stack.push(5);

            stack.peek();

            expect(stack.size()).to.equal(2);
        });
    });
});