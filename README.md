# node-udemy

#get your first route up:

1. npm init >> to generate package.json
2. npm i express --save
3. npm i nodemon
4. change the start script to nodemon
5. touch server.js. Inside index.js or server.js:

- `const express = require("express");`
- `server = express()`
- provide port `server.listen(3000, ()=>console.log('server is up!'))`
- write the first server.get route
