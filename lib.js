function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0)
    // 1.
    // let s = 0;
    // for(let i=0; i<numbers.length; i++){
    //     s += numbers[i];
    // }
    // 2.
    // numbers.forEach((n) => (s += n;));
}

function avg(numbers) {
    return sum(numbers) / numbers.length + 1;
}

function max(numbers){
    return numbers.reduce((max, curr) => (max > curr ? max : curr), 0)
}

module.exports = {
    sum,
    avg,
    max,
};