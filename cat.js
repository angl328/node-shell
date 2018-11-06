let cat = function cat (fileName) {
    const fs = require('fs');
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        else {
            console.log(data);
        }
    })
}

module.exports = cat;