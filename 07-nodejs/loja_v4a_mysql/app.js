
const app = require('./config/express')();
const rotasProdutos = require('./app/rotas/produtos')(app);
const rotaHome = require('./app/rotas/home')(app);

app.listen(3001, function() {
    console.log('Servidor executando com express ...');
});





