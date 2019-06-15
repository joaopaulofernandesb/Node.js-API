const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const CustomersSchema = new mongoose.Schema({

    name:{
        type: String,
        unique:true,
        required: true,
       
    },

    cpf:{
        type: String,
        unique:true,
        required: true,
        
    },

    email:{
        type:String,
        unique:true,
        required: true,
        
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {

        type:Date,
        default: Date.now,
        
      
       
    },


    


});

CustomersSchema.plugin(mongoosePaginate);

mongoose.model('Customers', CustomersSchema);