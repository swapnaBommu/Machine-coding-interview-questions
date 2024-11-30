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
