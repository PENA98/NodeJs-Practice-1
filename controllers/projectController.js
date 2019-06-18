var path = require("path");

exports.projectHome =  (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
};

// Buscar los Template Engines más utilizados con Node.js
// pug, EJS, Handlebars (mustache.js)