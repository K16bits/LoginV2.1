import React from 'react'
import Title from '../../components/Title'
import Form from '../..//components/Form'
import Main from '../../components/Main'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Homepage(){
    return(
        <Main>
            <Title>Login</Title>
            <Form>
                <Input placeholder='User'></Input>
                <Input placeholder='Senha' type='password'></Input>
                <Button>Entrar</Button>           
            </Form>
        </Main>
    )
}