const { Router } = require('express');
const router = Router();
//Install underscore library
//const _ = require('underscore')

const movies = require('./movies.json')

//Show all the movies
router.get('/', (req, res) => {
    res.json(movies)
});

//Add a new movie
router.post('/add', (req, res) => {
    const {title, director, year, rate} = req.body;
    if (title && director && year && rate) {
        const id = movies.length +1
        const newMovie = {...req.body, id};
        movies.push(newMovie)
        res.json(movies)
    } else {
        res.status(500).json({error: 'There was an error.'})
    }
});

//Removing a movie
 router.delete('/remove/:id', (req, res) => {
    const idToRemove  = req.params.id;
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].id == idToRemove){
            movies.splice(i, 1);
            } else {
             res.status(404).send("No se ha encontrado ninguna película con ese ID.")
            }
    }
    res.json(movies);
}); 

//Update a movie
router.put('/update/:id', (req, res) => {
    const movieToUpdateId = req.params.id;
    const updatedMovie = req.body;
    for (let i = 0; i < movies.length; i++) {
     {
         if(movies[i].id == movieToUpdateId) {
            movies[i].title = updatedMovie.title ||  movies[i].title;
            movies[i].director = updatedMovie.director ||  movies[i].director;
            movies[i].year = updatedMovie.year ||  movies[i].year ;
            movies[i].rate = updatedMovie.rate ||  movies[i].rate ; 
         }
        }
        
    }
    res.json(movies);
});

router.put('/like/:id', (req, res) => {
    const likeId = req.params.id;
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].id == likeId ) {
            movies[i].like ++;
        } 
        
    } 

    res.json(movies); 
})


module.exports = router;