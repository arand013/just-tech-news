// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Greeneye1', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

module.exports = sequelize;