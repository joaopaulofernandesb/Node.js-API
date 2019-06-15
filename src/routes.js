const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const CostumersController = require('./controllers/CustomersController');
const OrdersController = require('./controllers/OrdersController');


routes.get('/customers',CostumersController.index);//retorna dados do MongoDB Aptraves da API
routes.get('/customers/:id', CostumersController.show);// Faz a Consulta pelo ID 
routes.post('/customers',CostumersController.store);//Faz um POST no BD 
routes.put('/customers/:id', CostumersController.update); // edita e atualiza
routes.delete('/customers/:id', CostumersController.destroy);//Apaga dados Atravez do ID 


routes.get('/products', ProductController.index); // exibe informações do bd em json
routes.get('/products/:id', ProductController.show ); // busca por id 
routes.post('/products', ProductController.store); // grava informações
routes.put('/products/:id', ProductController.update); // edita e atualiza
routes.delete('/products/:id', ProductController.destroy); // apaga
routes.get('/products/delet/:id',ProductController.destroy);


routes.get('/orders', OrdersController.index);
routes.post('/orders',OrdersController.store);//Faz um POST no BD 
routes.get('/orders/:id', OrdersController.show);// Faz a Consulta pelo ID 
routes.put('/orders/:id', OrdersController.update);
routes.delete('/orders/:id', OrdersController.destroy);

module.exports = routes;