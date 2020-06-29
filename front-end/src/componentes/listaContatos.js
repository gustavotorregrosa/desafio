import React, { Component } from 'react'
import DeletaContato from './modalDeleta'
import '../assets/cor-input.css'

class ListaContatos extends Component {

    constructor(props) {
        super(props)

    }


    listaItens = () => {
        if (this.props.usuarios) {
            let usuarios = [...this.props.usuarios]
            let tbl = usuarios.map(el => (<tr className="borda-azul" onClick={() => this.abreModalDeleta(el)} style={{cursor: 'pointer'}} key={el.id}><td style={{borderLeft: 'none'}}>{el.id}</td><td>{el.nome}</td><td>{el.email}</td><td>{el.nascimento}</td><td>{el.telefone}</td></tr>))
            return tbl
        }
        return null
    }   

    abreModalDeleta(contato){
        this.childAbreModalDeletaContato(contato)
    }
   

    render() {
        return (
            <div style={{
                backgroundColor: "white",
                minHeight: '40em',
                paddingTop: '2em',
                paddingBottom: '2em',
            }}>
                <div className="container">
                    <div style={{
                        color: '#47b5e6',
                        textAlign: 'center',
                        fontSize: '25px',

                    }}>
                        <p>LISTA DE CADASTRO</p>
                    </div>
                    <div class="row">
                        <div className="col s12">

                            <table style={{fontFamily: 'Helvetica'}} className="responsive-table">
                                <thead>
                                    <tr className="borda-azul">
                                        <th style={{borderLeft: 'none'}}></th>
                                        <th>NOME</th>
                                        <th>E-MAIL</th>
                                        <th>NASCIMENTO</th>
                                        <th>TELEFONE</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.listaItens()}
                                </tbody>
                            </table>


                        </div>
                    </div>

                </div>
                <DeletaContato listarContatos={() => this.props.listarContatos()} setAbreModal={f => this.childAbreModalDeletaContato = f} />
            </div>
        )
    }

}

export default ListaContatos