const connection = require('../Database/connection');
const brcryt = require('bcrypt');

module.exports = {
    async add(request,response){
        const {email,senha,nome} = request.body;
        const hash = await brcryt.hash(senha,6);

       try{
           await connection('users').insert({
               email,
               senha:hash,
               nome
            })
        response.json(nome);

       }catch(e){
           console.log(e);
       }
    },

    async list(request,response){
        try{
            const data = await connection('users').select('*');
            console.log(data);
            response.json(data)
        }catch(e){
            console.log(e);
        }
    },

    async auther(resquest,response){
        
    }

}