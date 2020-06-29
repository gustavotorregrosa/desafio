import React, {Component} from 'react';
import imagemFundoDesktop from '../assets/rodape-desktop.jpg'
import imagemFundoMobile from '../assets/rodape-mobile.jpg'

class Rodape extends Component {

    usuario = () => {
        let usuario = {
            nome: "",
            email: "",
            telefone: "",
            faculdade: "Faculdade de Belo Horizonte"
        }

        if(this.props.usuarios[0]){
            usuario = {
                ...usuario,
                ...this.props.usuarios[0]
            }
        }

        return usuario
    }

    estilo = () => {
        let desktop = {
            padding: '1em', 
            backgroundImage: "url(" + imagemFundoDesktop + ")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            color: 'white'
        }

        let mobile = {
            ...desktop,
            backgroundImage: "url(" + imagemFundoMobile + ")",
            backgroundSize: '100%'
        }

        let estilo = {
            desktop,
            mobile
        }

        return estilo[this.props.tamanho]
        
    }

    render(){
        let usuario = this.usuario()
        return(
            <div style={this.estilo()}>
                <div className="container">
                    <br/>
                    <p>{usuario.nome}</p>
                    <p>{usuario.email}</p>
                    <p>{usuario.telefone}</p>
                    <p>{usuario.faculdade}</p>

                </div>
                
            </div>
        )
    }
}

export default Rodape