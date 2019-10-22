require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  swaggerUi = require('swagger-ui-express');

const routes = require('./routes'),
  swaggerSpec = require('./swagger-spec');

// Application-Level Middleware
const app = express();
app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

// Routes
app.use('/bitcoinScorechain', routes.bitcoinScorechain);
app.use('/ethereumScorechain', routes.ethereumScorechain);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || 'Something broke!' });
});

// Start
const server = app.listen(app.get('port'), () => {
  console.log('Universal-AML server listening on port ' + app.get('port'));
});
