import React, { useEffect, useState } from 'react'
import Main from '../../components/Main'
import Field from '../../components/perfil-Field'
import api from '../../services/api'

export default function Perfil(){

    const [perfis, setperfis] = useState([]);

    useEffect( () =>{
        api.get("/user").then( resposta => {setperfis(resposta.data)})
    },perfis)

    return(

        <Main>
            <Field>
                <ul>
                    { perfis.map( elemento => (
                        <li>
                            <h1>Nome: {elemento.nome}</h1>
                            <h2>Email: {elemento.email}</h2>
                        </li>
                        ))
                    }
                </ul>
            </Field>

        </Main>

    )
}