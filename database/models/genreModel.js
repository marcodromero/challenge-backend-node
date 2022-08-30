const {DataTypes, Model} = require('sequelize');

//genre configuration
const GENRE_TABLE = 'Genres';

const GenreSchema = {
    id_genre: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(20)
    }
}

class Genre extends Model{
    static config(sequelize){ 
        return{
            sequelize,
            tableName: GENRE_TABLE,
            modelName: 'Genre',
            timestamps: false
        }
    }
};

module.exports = {GENRE_TABLE, GenreSchema, Genre};