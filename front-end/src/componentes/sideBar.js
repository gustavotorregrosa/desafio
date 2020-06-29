import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../assets/icons.css'
import Logo from './logo'


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instancia = null
    }

    componentDidMount() {
        this.ativaSideNav()
    }

    ativaSideNav = () => {
        if (this.instancia) {
            this.instancia.destroy()
        }
        this.elems = document.getElementById('minhasidenav')
        M.Sidenav.init(this.elems, {});
        this.instancia = M.Sidenav.getInstance(this.elems)
    }


    render() {
        return (
            <div>
                <nav className="" style={{backgroundColor: 'transparent', color: 'white'}}>
                    <div className="nav-wrapper container">
                        <a href="#" style={{position: 'relative'}} className="brand-logo left"><Logo /></a>
                        <a href="#" onClick={(e) => this.instancia.open()} className="right sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">cadastro</a></li>
                            <li><a href="#">&bull;</a></li>
                            <li><a href="#">lista</a></li>
                            <li><a href="#">&bull;</a></li>
                            <li><a href="#">sobre mim</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="minhasidenav">
                    <li style={{textAlign: 'left'}}><a href="#">cadastro</a></li>
                    <li style={{textAlign: 'left'}}><a href="#">lista</a></li>
                    <li style={{textAlign: 'left'}}><a href="#">sobre mim</a></li>
                </ul>
            </div>

        )
    }
}

export default NavBar