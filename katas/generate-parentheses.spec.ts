import { expect } from "chai";
import { isString } from "util";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
 * Represents parenthesis generator
 */
class Parenthesis {
    /** Open parenthesis */
    readonly open: string = '(';

    /** Closing parenthesis */
    readonly close: string = ')';

    /** Input number of parenthesis */
    readonly count: number;

    /** Length of each pair */
    readonly length: number;

    /** Output pairs of parenthesis */
    pairs: string[];

    /**
     * Represents parenthesis object
     * @param count number of parenthesis
     */
    constructor(count: number) {
        this.count = count;
        this.length = count * 2;
        this.pairs = [];
    }

    /**
     * Generate parenthesis pairs
     */
    generate() : string[] {
        this.generatePair('', 0 ,0);

        return this.pairs;
    }

    /**
     * Generate parenthesis pair recursion
     * @param pair 
     * @param numberOpen 
     * @param numberClosed 
     */
    generatePair(pair: string, numberOpen: number, numberClosed: number) {
        // end recursion when pair is complete
        if (pair.length === this.length) {
            // only add if pair is not empty
            if (pair) {
                this.pairs.push(pair);
            }

            // finish recursion
            return;
        }

        // generate two recursions:
        // 1) open parenthesis, should start till reach limit
        // 2) close parenthesis should start when there open one added

        // Number of open parentheses should be less then count of pairs
        if (numberOpen < this.count) {

            // increment length
            let pairOpenNumber = numberOpen + 1;
            let pairOpen = pair + this.open;

            this.generatePair(pairOpen, pairOpenNumber, numberClosed)
        }

        if (numberClosed < numberOpen) {
            // increment length
            let pairClosedNumber = numberClosed + 1;
            let pairClosed = pair + this.close;

            this.generatePair(pairClosed, numberOpen, pairClosedNumber)
        }

    }
}

describe('Generate parentheses', () => {

    it('Should generate 0 pairs for 0 parentheses pair', () => {
        let parenthesis = new Parenthesis(0);

        const pairs = parenthesis.generate();
       
        expect(pairs).to.eql([]);
    });

    it('Should generate 1 pair for 1 parentheses', () => {
        let parenthesis = new Parenthesis(1);

        const pairs = parenthesis.generate();
       
        expect(pairs).to.eql(['()']);
    });

    it('Should generate 2 pairs for 2 parentheses', () => {
        let parenthesis = new Parenthesis(2);

        const pairs = parenthesis.generate();

        console.info(pairs);
       
        expect(pairs).to.eql([
            '(())',
            '()()'
        ]);
    });

    it('Should generate 5 pairs for 3 parentheses', () => {
        let parenthesis = new Parenthesis(3);

        const pairs = parenthesis.generate();

        console.info(pairs);
       
        expect(pairs).to.eql([
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()'
        ]);
    });
});