const connection = require('../Database/connection');
const brcryt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = "AlgumaPalavraSecreta"

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
        return response.json({nome});

       }catch(e){
           console.log(e);
       }
    },

    async list(request,response){
        try{
            const data = await connection('users').select('*');
            console.log(data);
            response.json(data);
        }catch(e){
            console.log(e);
        }
    },

    async remove(request,response){
        const id =  request.params.id;
        const resposta = await connection('users').where({'id':id}).delete();
        
        if(resposta){
            response.send("Valor deletado")
            console.log(true)
        }else{
            response.send("Valor não encontrado")
            console.log(false)
        }
        
    },

    async autherticate(request, response){
        const {email,senha} = request.body;
        
        try{
            const resposta = await connection('users').where("email",email).select("email","senha","nome").first()
            
            if(resposta != undefined){
                return response.json(resposta.nome)
            }
        }catch(e){
            console.log("Erro no banco "+ e)
        }

        
        // const resposta = await brcryt.compare(senha,data['senha'])

        // if(resposta == true){
        //     console.log("Senha correta")
        //     const token = jwt.sign({email:email},secret)
        //     return response.json({token})
        // }else{
        //     return response.send("Errou na senha");
        // }
    }
}