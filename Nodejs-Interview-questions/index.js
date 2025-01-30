const express = require('express');
const fs = require('fs').promises;
const cookies = require('cookie-parser');

const app = express();
app.use(cookies);

port = 5000;

async function readFileAsync(filePath) {
    try{
        const data = await fs.readFile(filePath,'utf-8');
        console.log(data);
    }catch(err){
        console.log('Error in reading file',err)
    }
}
const filePath = './hello.txt'
readFileAsync(filePath);

app.get('/', (req, res) => { res.send('Hello, World!'); }); 
app.listen(port, () => { console.log(`Server running at http://localhost:${port}/`); });