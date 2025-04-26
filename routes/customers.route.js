const express = require('express');
const {getCustomer, getCustomers,createCustomer,updateCustomer,deleteCustomer} = require('../controllers/customers.controllers');

const customerRouter = express.Router();

customerRouter.get('/',getCustomers);
customerRouter.get('/:id',getCustomer);

customerRouter.post('/',createCustomer);
customerRouter.put('/:id',updateCustomer);
customerRouter.delete('/:id',deleteCustomer);
 
module.exports = customerRouter;
