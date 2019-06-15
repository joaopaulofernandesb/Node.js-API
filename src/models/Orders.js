const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const OrdersSchema = new mongoose.Schema({

     createdAt: {
        type: Date,
        default: Date.now,
    },

    status:{
        type: String,
        required: true,

    },
    total:{
        type: Number,
        required: true,
    },
    buyer:{
    
        name:{
            type:String,
            require:true,
        },
        cpf:{
            type:Number,
            unique:true,
            require:true,
        },
        email:{
            type:String,
            require:true,
        }
    },
    items:[{
        amount:{
            type:String,
            require:true,
        },
        price_unit:{
            type:Number,
            require:true,
        },
        total:{
            type:Number,
            require:true,
        },
        product:{
            sku:{
                type:Number,
                require:true,
            },
            title:{
                type:String,
                require:true,
            }
            
        },
     }]
});


OrdersSchema.plugin(mongoosePaginate);

mongoose.model('Orders', OrdersSchema);