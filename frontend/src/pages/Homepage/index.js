import React, { useState } from 'react'
import Title from '../../components/Title'
import Form from '../..//components/Form'
import Main from '../../components/Main'
import Input from '../../components/Input'
import Button from '../../components/Button'

import api from '../../services/api'


export default function Homepage(){

    const [email,setnome] = useState('');
    const [senha,setsenha] = useState('');

    async function HandleRegister(e){
        e.preventDefault();
        const data = {
            email,
            senha
        }
        console.log(data)

        try{
            const resposta = await api.post("/",data)
           
            if(resposta !== undefined){
                alert(`Bem-vindo Sr. ${resposta.data}`)
            }else{
                alert("Email ou senha inválida")
            }
            
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Main>
            <Form onSubmit={HandleRegister}>
                <Title>LOGIN</Title>
                <Input value={email} placeholder='Usuario'
                    onChange= { e => setnome(e.target.value)}
                ></Input>
                <Input value={senha} placeholder='Senha' type='password'
                    onChange = { e => setsenha(e.target.value) }
                ></Input>
                <Button type='submit' onSubmit={HandleRegister} >Entrar</Button>
            </Form>
        </Main>
    )
}