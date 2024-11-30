//8. Write a middleware function in Express.js that logs the method, 
//URL, and response time for each request.

// Middleware function to log method, URL, and response time 

const requestLogger = (req, res, next) => { 
    const start = Date.now(); 
    res.on('finish', () => {
         const duration = Date.now() - start; 
         console.log(`${req.method} ${req.originalUrl} - ${duration}ms`); });
          next(); 
    }; 
// Use the middleware in the Express app 
app.use(requestLogger);