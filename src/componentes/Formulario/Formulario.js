import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const generos = [
    'Masculino',
    'Feminino'
]

function Formulario(){
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do animal</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome" />
                <CampoTexto label="Idade" placeholder="Digite a idade" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Gênero" itens={generos}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario