const express = require('express');
const app = express();
const morgan = require('morgan')

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use('/api/movies', require('./movies/movies'));



//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${3000}`);
})