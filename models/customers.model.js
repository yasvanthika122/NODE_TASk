const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Customer name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Customer email is required'],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Phone number must be 10 digits']
    },
    address: {
        type: String,
        default: ''
    },
    isPremiumMember: {
        type: Boolean,
        default: false
    }
});

const Customer = mongoose.model('Customer', customerSchema); 
module.exports = Customer; 
