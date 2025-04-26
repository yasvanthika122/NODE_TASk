const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name'],
        trim:true
    },
    category: {
        type: String,
        enum: {
          values: ['Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Beverages', 'Snacks', 'Frozen'],
          message: 'Category must be one of Vegetables, Fruits, Dairy, Bakery, Beverages, Snacks, Frozen'
        },
        required: [true, 'Please select a category']
      },
      price:{
        type: Number,
        required:true,
        min:0
      },
      quantityInStock:{
        type:Number,
        default:0,
        min:0
      },
      discount:{
        type:Number,
        min:[0,"Discount cannot be less than 0"],
        max: [100, 'Discount cannot be more than 100'],
        default: 0
      },
      expiryDate: {
        type: Date,
        required: function() {
            return this.category === 'Vegetables' || this.category === 'Fruits'; 
        }
       },
      unit:{
        type:String,
        enum:['kg', 'g', 'l', 'ml', 'pcs'],
        required:true
      },
      description: {
        type: String,
        default: ''
      }      
},
{
 timestamps:true
}  );

const Product = mongoose.model('products',productSchema);
module.exports = Product;