import { Word } from "./number-of-islands";
import { expect } from "chai";

describe('Number of Islands', () => {
    it('should return 0 for empty map', () => {
        let map = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        let islands = new Word(map).getNumberOfIslands();
        
        expect(islands).to.equal(0);
    });

    it('should return 1 island for 1 island in left corner', () => {
        let map = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        let islands = new Word(map).getNumberOfIslands();

        expect(islands).to.equal(1);
    });

    it('should return 1 island for 1 island in left corner based on multiple cells', () => {
        let map = [
            [1, 1, 0],
            [1, 0, 0],
            [0, 0, 0]
        ];

        let islands = new Word(map).getNumberOfIslands();

        expect(islands).to.equal(1);
    });

    it('should return 2 island for 2 island in left and right corners', () => {
        let map = [
            [1, 1, 0],
            [1, 0, 1],
            [0, 1, 1]
        ];

        let islands = new Word(map).getNumberOfIslands();

        expect(islands).to.equal(2);
    });

    
    it('should return 3 island', () => {
        let map = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ];

        let islands = new Word(map).getNumberOfIslands();

        expect(islands).to.equal(3);
    });

    it('should return 3 island', () => {
        let map = [
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1]
        ];

        let islands = new Word(map).getNumberOfIslands();

        expect(islands).to.equal(1);
    });
});