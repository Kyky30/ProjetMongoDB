const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('./config');

const app = express();
const port = 3000;



// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware for parsing JSON
app.use(express.json());


// db
const dbConnection = require('./chemin-vers-db.js');
dbConnection.on('connected', () => {
    // Démarrer le serveur Express une fois la connexion établie
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});