//Back-End Variables/CONST
// turn on routes
// Front-End Varriables/CONST here were Added after Back-End ones above
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const authenticate = require('./utils/auth');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));
app.use(require('./utils/auth'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on Port ' + PORT));
});
