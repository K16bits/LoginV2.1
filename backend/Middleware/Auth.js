const jwt = require('jsonwebtoken')
const secret = "AlgumaPalavraSecreta"

module.exports = (request,response,next) => {
    const authToken = request.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ');
        const token = bearer[1]

        jwt.verify(token,secret, (erro,data) =>{
            if(erro){
                response.status(401)
                response.json({erro :"Falha no Token"})
            }else{
                response.send("Token válido")
                console.log(data)
                next()
            }
        })
    }
}