const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({

    sku:{
        type: Number,
        unique:true,
        required: true,
       
    },

    name:{
        type: String,
        unique:true,
        required: true,
        
    },

    price:{
        type:String,
        required: true,
        
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {

        type:Date,
        default: Date.now,
        
      
       
    }


    


});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);