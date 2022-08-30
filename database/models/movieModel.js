const {DataTypes, Model} = require('sequelize');

//model configuration
const MOVIE_TABLE = 'Movies';

const MovieSchema = {
    id_movie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    image: {
        allowNull: false,
        type: DataTypes.BLOB
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING(40)
    },
    creation_date:{
        allowNull: false,
        type: DataTypes.DATE,
    },
    rating:{
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }

}

class Movie extends Model{

    static associate(models){
        this.belongsToMany(models.Genre, { through: 'movie_genre' });
    }
    
    static config(sequelize){ 
        return{
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Movie',
            timestamps: false
        }
    }
};

module.exports = {MOVIE_TABLE, MovieSchema, Movie};
