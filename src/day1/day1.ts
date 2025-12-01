

export async function day1() {

    console.log('Day 1');

    const rotationsFileText = await Bun.file('src/day1/input.txt').text();
    const rotations = rotationsFileText.split('\n');

    let dial = 50; // between 0 and 99
    let numberOfZeroes = 0;

    for (let rotation of rotations) {
        const [direction, ...steps] = rotation;
        const stepCount = parseInt(steps.join(''), 10);

        if (direction === 'L') {
            for (let i = 0; i < stepCount; i++) {
                dial = (dial - 1 + 100) % 100;
                if (dial === 0) {
                    numberOfZeroes++;
                }
            }

        } else if (direction === 'R') {
            for (let i = 0; i < stepCount; i++) {
                dial = (dial + 1) % 100;
                if (dial === 0) {
                    numberOfZeroes++;
                }
            }
        }
    }
    console.log(`Number of times dial hit zero: ${numberOfZeroes}`);

}
