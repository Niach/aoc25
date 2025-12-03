

export async function day2() {

    console.log('Day 2');

    const inputFileText = await Bun.file('src/day2/input.txt').text();

    const ranges = inputFileText.split(',');
    let sumOfAllPalindromes = 0;

    for (const range of ranges) {
            const [start, end] = range.split('-').map(Number);
            for (let current = start; current <= end; current++) {
                const numberString = current.toString();
                if (numberString.length % 2 === 1) {
                    continue;
                }
                const midIndex = numberString.length / 2;

                const leftHalf = numberString.slice(0, midIndex);
                const rightHalf = numberString.slice(midIndex);

                if (leftHalf === rightHalf) {
                    sumOfAllPalindromes += current;
                }

            }

    }
    console.log('Palindromes', sumOfAllPalindromes);

}
