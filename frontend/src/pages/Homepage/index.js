import React, { useState } from 'react'
import Title from '../../components/Title'
import Form from '../..//components/Form'
import Main from '../../components/Main'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Homepage(){

    const [nome,setnome] = useState('');
    const [senha,setsenha] = useState('');


    async function HandleRegister(e){
        e.preventDefault();
        const data = {
            nome,
            senha
        }
        console.log(data);

    }

    return(
        <Main>
            <Form onSubmit={HandleRegister}>
                <Title>LOGIN</Title>
                <Input name='user' placeholder='Usuario'
                    onChange= { e => setnome(e.target.value)}
                ></Input>
                <Input name='password' placeholder='Senha' type='password'
                    onChange = { e => setsenha(e.target.value) }
                ></Input>
                <Button type='submit' onSubmit={HandleRegister} >Entrar</Button>
            </Form>
        </Main>
    )
}