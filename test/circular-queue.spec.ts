import { CircularQueue } from './../src/circular-queue';
import { expect } from 'chai';

describe('CircularQueue', () => {
    let queue: CircularQueue<number>;

    beforeEach(() => {
        queue = new CircularQueue<number>();
    });

    describe('size', () => {
        it('should be empty when initialized', () => {
            expect(queue.size()).to.equal(0);
        });

        it('should have 1 item, when 1 enqueued', () => {
            queue.enqueue(3);

            expect(queue.size()).to.equal(1);
        });

        it('should have 1 item, when 2 enqueued and 1 dequeued', () => {
            queue.enqueue(3);
            queue.enqueue(5);
            queue.dequeue();

            expect(queue.size()).to.equal(1);
        });

        it('should have 2 item, when 6 enqueued and 1 dequeued', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);
            queue.enqueue(5);
            queue.dequeue();
            queue.enqueue(5);

            expect(queue.size()).to.equal(5);
        });
    });

    describe('enqueue', () => {
        it('should return false when enqueue more than 5 items', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);
            queue.enqueue(5);

            expect(queue.enqueue(6)).to.be.false;
        });
    });

    describe('dequeue', () => {
        it('should return null when queue is empty', () => {
            expect(queue.dequeue()).to.be.null;
        });

        it('should return null when queue is empty', () => {
            queue.enqueue(5);
            let item = queue.dequeue();

            expect(item).to.equal(5);
        });

        it('should return 3rd item when 2 are dequeued', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);
            queue.enqueue(5);
            queue.dequeue();
            queue.dequeue();
            let item = queue.dequeue();

            expect(item).to.equal(3);
        });
    });
});