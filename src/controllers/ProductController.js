const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports ={ 

    //listagem de conteudos no formato json do mongoDB
    async index(req, res){
        const { page = 1 } = req.query;
        const products =  await Product.paginate({}, {page, limit:10});

        return res.json(products);

    },

    async show(req, res){
        const products = await Product.findById(req.params.id);
        return res.json(products);
    },


    //inserção de dados no formato json no mongoDB
    async store(req, res){
        const products = await Product.create(req.body);
        return res.json(products);
    }, 

    //update
    async update(req, res){
        const products =await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(products);
    },

    //apaga
    async destroy(req, res){

        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }

    
};