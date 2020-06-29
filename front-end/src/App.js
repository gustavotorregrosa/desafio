import React, {Component} from 'react';
import './App.css';
import './assets/cor-input.css'
import BannerPrincipal from './componentes/bannerPrincipal'
import Cadastro from './componentes/cadastro'
import ListaContatos from './componentes/listaContatos'
import Rodape from './componentes/rodape'
import * as dados from './dados'

class App extends Component {

  state = {
    tamanho: 'desktop',
    usuarios: [
      {
        id: 1,
        nome: 'Gustavo Torregrosa Costa',
        email: 'gustavo.torregrosa@gmail.com',
        telefone: '123456789',
        nascimento: '13/02/1985'

      },
      {
        id: 2,
        nome: 'Gustavo Torregrosa Costa',
        email: 'gustavo.torregrosa@gmail.com',
        telefone: '123456789',
        nascimento: '13/02/1985'

      }
    ],
    usuarioSelecionado: null
  }

  listarContatos = () => {
    fetch(dados.urlContato).then(r => r.json()).then(usuarios => this.setState({usuarios}))
  }

  componentDidMount(){
    this.listarContatos()
    this.ajustaTamanho()
    window.addEventListener('resize', () => {
      this.ajustaTamanho()
    })
    
  }

  ajustaTamanho = () => {
    let tamanho = 'desktop'
    if(window.innerWidth < 993){
      tamanho = 'mobile'
    }
    this.setState({
      tamanho
    })
  }


  render(){
    return (
      <div className="App">
            <BannerPrincipal tamanho={this.state.tamanho} />
            <Cadastro listarContatos={() => this.listarContatos()} />
            <ListaContatos usuarios={this.state.usuarios} listarContatos={() => this.listarContatos()} />
            <Rodape usuarios={this.state.usuarios} tamanho={this.state.tamanho} />
      </div>
      
    )
  }
  
}

export default App;
