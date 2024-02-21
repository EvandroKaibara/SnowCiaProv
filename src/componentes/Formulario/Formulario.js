import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

function Formulario(){
    const generos = [
        'Masculino',
        'Feminino'
    ]

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')

    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do animal</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    label="Idade" 
                    placeholder="Digite a idade"
                    obrigatorio={true}
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Gênero"
                    itens={generos}
                    obrigatorio={true}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario