# first-rest-api Movie app

## Based on this video
  [Tu primer REST API usando Node.js, ¿Que es una REST API?](https://www.youtube.com/watch?v=bK3AJfs7qNY)

## concepts
API: An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation.

## usefull apps
[Json_viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related)


## step by step

1 download [vscode](https://code.visualstudio.com/download)

2 download [nodejs](https://nodejs.org/en/download/)

3 download [postman](https://www.postman.com/downloads/)

4 create server: new folder with project name in this case first-rest-api

5 open console windows cmd  or terminal inside vs code for next step

6 create package.json using :
``` npm init --yes```

7 for creating the server use express and morgan modules with the command:
```npm i express morgan ```
express is a node framework that is helful for writting information to the server and morgan lets us see in console incoming requests.

8 create new folder src (source)

9 inside src folder create new file index.js

10 in index.js require express
```const express = require('express');``` or
```import express from 'express';  ```(es module)

11 in index.js create app variable
```const app = express();```

12 in index.jsapp listen in port 3000  and log connection
```app.listen(3000, () => {
  console.log(`Server on port ${3000}`)
})```

13 test with command
```node src/index.js```

14 on browser go to
[http://localhost:3000/](http://localhost:3000/)
error must appear on my case, nothing at all, it is ok

15 in index.js require morgan
```const morgan = require('morgan');```
it is a middleware that reads incoming data

16 execute the middleware
```app.use(morgan('dev'));```
morgan let me see in console incoming data

17 on terminal/cmd run again
```node src/index.js```
Cannot Get / will appear

18 in index.js for receiving json files add
```app.use(express.json());```

19 in index.js for receiving js forms add
```app.use(express.urlencoded({extended: false}));```
it recibes nothing to heavy as images

20 install nodemon on console/terminal/cmd for refreshing
```npm i nodemon -D```

21 change app.set('port', 3000) to
```app.set('port', process.env.PORT || 3000)```
it means either  process.env.PORT (deployment server port)  or default 3000 port

22 create routes
```//3-22 create routes
app.get('/', (req, res) => {
  res.send('Hellow World 1')
})
```
23 in package.json in scripts add
```"nodemon src/index.js"```
for executing nodemon

24 in terminal/cmd run dev
```npm run dev```

25 in app.js change route to respond wiht a json file and for the app a title with hello world
```app.get('/', (req, res) => {
  res.json({"Title":"Hello world 2"})
})```




