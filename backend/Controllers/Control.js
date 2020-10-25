const connection = require('../Database/connection');

module.exports = {
    async add(request,response){
        const {email,senha,nome} = request.body;

       try{
           await connection('users').insert({
               email,
               senha,
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
    }
}