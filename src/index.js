const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//2-15 middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//3-22 create routes
app.get('/', (req, res) => {
  res.json({"Title":"Hello world 2"})
})

//1-12 starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});
