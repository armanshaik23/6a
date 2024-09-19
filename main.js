const arithmetic = require('./arithmetic');
const fs = require('fs');

const a = 10;
const b = 5;

const sum = arithmetic.add(a,b);
const difference = arithmetic.subtract(a,b);
const product = arithmetic.multiply(a,b);
const quotient = arithmetic.divide(a,b);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Quotient: ${product}`);
console.log(`Quotient: ${quotient}`);

const results = `
    Sum: ${sum}
    Difference: ${difference}
    Product: ${product}
    Quotient: ${quotient}
    `;


fs.writeFile('results.txt',results,(err) => {
    if(err){
        console.error('Error writing to file',err);
    }else{
        console.log('Results written to results.txt');
    }
});

fs.readFile('results.txt','utf8',(err,data) => {
    if(err){
        console.error('Error reading from file',err);
    }else{
        console.log('Content of results.txt:');
        console.log(data);
    }
});

