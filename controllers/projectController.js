var path = require("path");

exports.projectHome =  (req, res) => {
    res.render('index');
};

// Buscar los Template Engines más utilizados con Node.js
// pug, EJS, Handlebars (mustache.js)