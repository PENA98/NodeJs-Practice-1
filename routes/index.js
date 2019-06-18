// Express router
const express = require('express');
const router = express.Router();

// Importar el Controller
const projectController = require
    ('../controllers/projectController');

module.exports = function () {


    router.get('/', projectController.projectHome);

    return router;
}