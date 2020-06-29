import React, {Component} from 'react'
import NavBar from './sideBar'
import imagemFundoDesktop from '../assets/banner-image-desktop.jpg'
import imagemFundoMobile from '../assets/banner-image-mobile.jpg'

class BannerPrincipal extends Component {

    estilo = () => {

        let desktop = {
            minHeight: '40em',
            backgroundImage: "url(" + imagemFundoDesktop + ")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
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
        return (
            <div  style={this.estilo()}>
                <NavBar />
                <div className="container">
                    <div style={{
                        color: 'white',
                        marginTop: '5em',
                        textAlign: 'left',
                        fontSize: '25px',
                        fontFamily: 'Helvetica'
                    }}>
                        <p>ESTÁGIO</p>
                        <p>PROVA DE SELEÇÃO</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BannerPrincipal