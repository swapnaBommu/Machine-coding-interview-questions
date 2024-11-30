// 6.Write a function to generate a JWT in Node.js 
// using the JSON web token package. Use userld as the payload.
const jwt = require('jsonwebtoken');
const userId = 1234;
const key = 'AS3fdsafSFESFSD'
//function to create/generate jwt
const token = jwt.sign({id:userId},key,{
    expiresIn:'5h'
});
//to set in cookies
return res
    .cookie("access_token", token, { httpOnly: true,})



