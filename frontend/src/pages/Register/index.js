import React, { useState } from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

import api from '../../services/api'
import Main from '../../components/Main'

export default function Register(){

    const [email,setemail] = useState('')
    const [senha,setsenha] = useState('')
    const [nome,setnome] = useState('')

    async function HandleRegister(e){
        e.preventDefault()

        const data = {
            email,
            senha,
            nome
        }
        console.log(data);
        
        try{
           const resposta =  await api.post("/user",data)
           alert(`Cadastro realizado Sr. ${resposta.data.nome}`)
           
        }catch(e){
            console.log(e)
        }
    }

    return(
       <Main>
         <Form onSubmit={HandleRegister}>
            <Input value={email} placeholder="Email"
                onChange = { e => setemail(e.target.value) }
            ></Input>
            <Input value={senha} type='password' placeholder="senha"
                onChange= { e => setsenha(e.target.value)}
            ></Input>
            <Input value={nome}  placeholder="nome"
                onChange ={ e => setnome(e.target.value ) }
            ></Input>
            <Button onSubmit={HandleRegister}>Enviar</Button>
         </Form>
       </Main>
        
    )
}