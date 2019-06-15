const mongoose = require('mongoose');



const Customers = mongoose.model('Customers');

module.exports ={ 

    //listagem de conteudos no formato json do mongoDB
    async index(req, res){
        const { page = 1 } = req.query;
        const customers =  await Customers.paginate({}, {page, limit:10});

        return res.json(customers);

    },

    async show(req, res){
        const customers = await Customers.findById(req.params.id);
        return res.json(customers);
    },


    //inserção de dados no formato json
    async store(req, res){
        const customers = await Customers.create(req.body);
        return res.json(customers);
    }, 

    //update
    async update(req, res){
        const customers =await Customers.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(customers);
    },

    //apaga
    async destroy(req, res){

        await Customers.findByIdAndRemove(req.params.id);
        return res.send();
    }

    
};