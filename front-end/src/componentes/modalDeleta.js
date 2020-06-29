import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import * as dados from '../dados'


class DeletaContato extends Component {

    constructor(props) {
        super(props)
        this.elem = null
        this.instance = null
        this.abrirModal = this.abrirModal.bind(this)
    }

    state = {
        loading: false,
        id: "",
        nome: ""
    }

    componentDidMount() {
        this.elem = document.getElementById('modal-deleta-contato')
        this.instance = M.Modal.init(this.elem, {
            onCloseEnd: () => this.setState({
                loading: false,
                id: "",
                nome: ""
            })
        })
        this.props.setAbreModal(this.abrirModal)
    }

    abrirModal = (contato) => {
        this.instance.open()
        this.setState({
            ...contato
        })
    }

    fechaModal = () => {
        this.instance.close()
    }

    deletaContato = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            method: 'delete',
            headers: myHeaders
        }
        setTimeout(() => {
            this.fechaModal()
            this.props.listarContatos()
            fetch(dados.urlContato + "/" + this.state.id, opcoes).then(r => r.json()).then(r => {
                M.toast({ html: r.mensagem })
                this.props.listarContatos()
            }).catch(r => {
                console.log(r)
            })
        }, 1000);
    }

    render() {
        return (
            <div id="modal-deleta-contato" className="modal">
                <div className="modal-content">
                    <div className="input-field col s6">
                        <p>Deletar o contato {this.state.nome} ?</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <a onClick={e => this.deletaContato(e)} href="#" className="waves-effect waves-green btn-flat">Deletar</a>
                    
                </div>
                {this.state.loading ? (<div className="progress"><div className="indeterminate"></div></div>) : null}

            </div>
        )
    }
}

export default DeletaContato