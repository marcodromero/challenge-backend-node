const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    const {name, genere, order} = req.query;
    res.send('query:Busqueda de pelicula por el nombre, filtrar por genero, ordenar por fecha ASC DESC');
});

router.get('/', (req, res)=>{
    res.send('Todas las peliculas con sus datos (imagen, titulo y fecha de creacion)');
});

router.get('/:id', (req, res)=>{
    res.send('Detalle de una pelicula o serie con los personajes que participaron');
});

router.post('/', (req, res)=>{
    res.send('Nueva pelicula');
});

router.patch('/:id', (req, res)=>{
    res.send('Modificar pelicula');
});

router.delete('/:id', (req, res)=>{
    res.send('Eliminar pelicula');
});


module.exports = router;