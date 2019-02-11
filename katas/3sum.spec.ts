import { expect } from "chai";

// the worst complexity in cubic N(3), following approach using N(2)
const solve3Sum = function(array: number[]) {
    let result: number[][] = [];
    // first sort array, use custom function because of js specifics
    array.sort((a, b) =>  a - b);

    for (let index = 0; index < array.length - 2; index++) {
        const element = array[index];
        
        let j = index + 1;
        let k = array.length - 1;

        while (j < k) {
            const sum = array[index] + array[j] + array[k];

            if (sum == 0) {
                result.push([array[index], array[j] , array[k]]);

                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result;
};

describe('3-sum problem', () => {
    it('solve', () => {
        const array = [-4, -1, -2, -3, 2, 3, 4, 5, 6, 7, 8, 9];

        const results = solve3Sum(array);

        expect(results).to.eql([
            [ -4, -3, 7 ],
            [ -4, -2, 6 ],
            [ -4, -1, 5 ],
            [ -3, -2, 5 ],
            [ -3, -1, 4 ],
            [ -2, -1, 3 ]
        ]);
    });
});