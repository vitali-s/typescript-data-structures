import { Queue } from './../src/queue';
import { expect } from 'chai';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it('should be empty when initialize', () => {
        expect(queue.size()).to.equal(0);
    });

    describe('add', () => {
        it('should have 1 item when 1 item added to queue', () => {
            queue.add(5);

            expect(queue.size()).to.equal(1);
        });
    });

    describe('poll', () => {
        it('should have 1 item when 2 added and 1 removed from queue', () => {
            queue.add(3);
            queue.add(5);

            let item = queue.poll();

            expect(queue.size()).to.equal(1);
        });

        it('should return first item when added to queue', () => {
            queue.add(2);
            queue.add(4);

            let item = queue.poll();

            expect(item).to.equal(2);
        });
    });

    describe('peek', () => {
        it('should return first item when 2 items added to queue', () => {
            queue.add(7);
            queue.add(6);

            let item = queue.peek();

            expect(item).to.equal(7);
        });

        it('should not remove item when return it', () => {
            queue.add(7);
            queue.add(9);

            queue.peek();

            expect(queue.size()).to.equal(2);
        });
    });
});