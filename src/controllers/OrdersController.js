const mongoose = require('mongoose');

const Orders = mongoose.model('Orders');

module.exports ={ 

    //listagem de conteudos no formato json do mongoDB
    async index(req, res){
        const { page = 1 } = req.query;
        const order =  await Orders.paginate({}, {page, limit:10});

        return res.json(order);

    },

    async show(req, res){
        const order = await Orders.findById(req.params.id);
        return res.json(order);
    },


    //inserção de dados no formato json no mongoDB
    async store(req, res){
        const order = await Orders.create(req.body);
        return res.json(order);
    }, 

    //update
    async update(req, res){
        const order =await Orders.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(order);
    },

    //apaga
    async destroy(req, res){

        await Orders.findByIdAndRemove(req.params.id);
        return res.send();
    }

    
};