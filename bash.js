process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    //process.stdout.write('You typed: ' + cmd);
    if(cmd === 'pwd'){
        require('./pwd')();
    }

    if(cmd === 'ls') {
        require('./ls')();
    }

    if(cmd.slice(0, 3) === 'cat') {
        let inputArr = cmd.split(' ');
    }
});







