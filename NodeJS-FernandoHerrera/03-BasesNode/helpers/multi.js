const fs = require('fs');
const colors = require('colors');

const executeMultiplication = (base, limit, shouldList) => {
    return new Promise((resolve, reject) => {
        try {
            let output = '';
            let consoleOutput = '';

            for (let i = 1; i <= limit; i++) {
                output += `${base} * ${i} = ${base * i} \n`;
                consoleOutput += `${`${base} * ${i}`.cyan} ${'='.grey} ${(base * i).toString().green} \n`;
            }

            output = output.trim();

            if (shouldList) console.log(consoleOutput);

            const fileName = base + '-table.txt';
            fs.writeFileSync(fileName, output);

            resolve(fileName);
        } catch (err) {
            reject(err);
            throw err;
        }
    });
};

module.exports = {
    executeMultiplication,
};
