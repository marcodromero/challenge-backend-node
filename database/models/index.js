const {Character, CharacterSchema} = require('./characterModel');
const {Movie, MovieSchema} = require('./movieModel');
const {Genre, GenreSchema} = require('./genreModel');

//create models
function setupModels(sequelize){
    Character.init(CharacterSchema, Character.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize)); 
    Genre.init(GenreSchema, Genre.config(sequelize));

    Character.associate(sequelize.models);
    Movie.associate(sequelize.models);
}

module.exports = setupModels;