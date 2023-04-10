const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '');
        
    }
    catch (err) {
        console.error(err);
    }
}
fileOps();

/* fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
 */
/* process.on('uncaughtException', err => {
    console.error (`There was an uncaught error: ${err}`);
    process.exit (1);
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Heeey, how are you?', (err) => {
    if (err) throw err;
    console.log('Writing completed');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nGreat! How about you?', (err) => {
        if (err) throw err;
        console.log('Appended completed');

    })
}) */