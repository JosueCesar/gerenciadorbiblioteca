const expresss = require('express');
const routes = require('./routes');

require('./database');

class App {
  constructor(){
    this.server = expresss();

    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.server.use(expresss.json());
  }
  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;