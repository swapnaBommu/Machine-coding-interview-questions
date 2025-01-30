// document.addEventListener(onload,function(){

    function generateRandomString(maxLen){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const length = Math.floor(Math.random() *maxLen)+1;
        for(let i=0;i<length;i++){
            result+=characters.charAt(Math.floor(Math.random()*characters.length));
        }
        return result;
    }
    function getStringLength(){
        const randomStr = generateRandomString(8);
        console.log('Random String:', randomStr); 
        console.log('Length of Random String:', randomStr.length);
       
    }
    getStringLength();
// })