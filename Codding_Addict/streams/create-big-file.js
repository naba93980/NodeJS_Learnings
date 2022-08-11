const fs = require('fs');
for (let i = 1; i <= 100000; i++) {
    fs.writeFileSync('./content.txt', `hello world ${i} \n`, {flag:'a'});
}
