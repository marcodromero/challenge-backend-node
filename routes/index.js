const charactersRouter = require('./charactersRouter.js');
const moviesRouter  = require('./moviesRouter.js');

function routerApi(app){
    app.use('/characters', charactersRouter);
    app.use('/movies', moviesRouter);
}

module.exports = routerApi;