const Customer = require('../models/customers.model');

// Retrieve all customers
const getCustomers = async (req,res) => {
try{
    const customer = await Customer.find({});
    res.status(200).json(customer);
}
catch(error)
{
    res.status(500).json({message: error.message});
}
};
// Retrieve a single customer by ID
const getCustomer = async (req,res) => {
    try{
        const {id} = req.params;
        const customer = await Customer.findById(id);
        if(!customer)
        {
            return res.status(404).json({ message: "Customer not found" })
        }
        res.status(200).json(customer);
        
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
};

//create a new customer 
const createCustomer = async(req,res) =>{
    try{
        const customer = await Customer.create(req.body);
        res.status(200).json(customer);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
};

// Update an existing customer
const updateCustomer = async (req,res) => {
    try{
        const {id} = req.params;
        const customer = await Customer.findByIdAndUpdate(id,req.body);
        if(!customer)
        {
            return res.status(404).json({ message: "Customer not found" })
        }
        res.status(200).json(customer);
        
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findByIdAndDelete(id);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCustomer,
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer
}

