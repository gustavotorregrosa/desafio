import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import VMasker from 'vanilla-masker'
import * as dados from '../dados'

class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        nascimento: '',
        telefone: ''
    }

    constructor(props) {
        super(props)
        this.meuForm = null
        this.elemDatePicker = null
        this.instanceDatePicker = null
        this.inputTelefone = null
    }

    componentDidMount() {
        this.setState({
            nome: '',
            email: '',
            nascimento: '',
            telefone: ''

        })
        this.instanceDatePicker = M.Datepicker.init(this.elemDatePicker, {
            format: 'dd/mm/yyyy',
            onSelect: (nascimento) => {
                this.alterarContatoNascimento(nascimento)
            },
            yearRange: 80
        });
        this.ativarMascara()
        setTimeout(() => {
            this.meuForm.reset()
        }, 4000)
    }

    abreDatePicker = () => {

        try {
            this.instanceDatePicker.open()
        } catch (e){
            console.log(e)
        }
        
    }


    salvaContato = e => {
        e.preventDefault()
        let myHeaders = new Headers
        myHeaders.set("Content-Type", "application/json")
        let opcoes = {
            method: 'post',
            body: JSON.stringify({
                ...this.state
            }),

            headers: myHeaders
        }
        fetch(dados.urlContato, opcoes).then(r => r.json()).then(r => {
            console.log(r)
            M.toast({ html: r.mensagem })
            this.props.listarContatos()
            this.setState({
                nome: '',
                email: '',
                nascimento: '',
                telefone: ''
    
            })
            this.meuForm.reset()
        }).catch(r => {
            console.log(r)
        })
    }

    alterarNomeContato = (e) => {
        let nome = e.target.value
        this.setState({
            nome
        })
    }

    alterarContatoEmail = (e) => {
        let email = e.target.value
        this.setState({
            email
        })
    }

    alterarContatoNascimento = (nascimentoString) => {
        let nascimento = nascimentoString.toISOString().slice(0, 10)
        this.setState({
            nascimento
        })
    }

 

    ativarMascara = () => {
        let c, v, m

        let inputHandler = (masks, max, event) => {
            c = event.target;
            v = c.value.replace(/\D/g, '');
            m = c.value.length > max ? 1 : 0;
            VMasker(c).unMask();
            VMasker(c).maskPattern(masks[m]);
            c.value = VMasker.toPattern(v, masks[m]);
        }

        let regMask = ['(99) 9999-9999', '(99) 9-9999-9999'];
        let reg = this.inputTelefone;
        VMasker(reg).maskPattern(regMask[0]);
        reg.addEventListener('input', inputHandler.bind(undefined, regMask, 14), false);
        reg.addEventListener('input', () => {
            let telefone = this.inputTelefone.value
            this.setState({
                telefone
            })
        });

    }


    render() {
        return (
            <div style={{
                backgroundColor: "#28abe3",
                minHeight: '40em',
                paddingTop: '2em',
                paddingBottom: '2em',
            }}>
                <div className="container">
                    <div style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '25px',

                    }}>
                        <p>CADASTRO</p>
                    </div>
                    <div class="row">
                        <form ref={form => this.meuForm = form} className="col offset-s2 s8">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input value={this.state.nome} onChange={(e) => this.alterarNomeContato(e)} style={{
                                        color: "white"
                                    }} id="first_name" type="text" className="validate" />
                                    <label style={{
                                        color: "white"
                                    }} htmlFor="first_name">Nome</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input value={this.state.email} onChange={(e) => this.alterarContatoEmail(e)} style={{
                                        color: "white"
                                    }} id="email" type="email" className="validate" />
                                    <label style={{
                                        color: "white"
                                    }} htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input value={this.state.nascimento} style={{
                                        color: "white"
                                    }}
                                        ref={
                                            input => this.elemDatePicker = input
                                        }
                                        onSelect={() => this.abreDatePicker()}
                                        id="nascimento" type="text" className="datepicker" />
                                    <label  onClick={() => this.abreDatePicker()} style={{
                                        color: "white"
                                    }} htmlFor="nascimento">Nascimento</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input value={this.state.telefone}
                                        ref={input => this.inputTelefone = input} style={{
                                            color: "white"
                                        }} id="telefone" type="text" className="validate" />
                                    <label style={{
                                        color: "white"
                                    }} htmlFor="telefone">Telefone</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div style={{
                        marginTop: '2em',
                        marginBottom: '2em'
                    }} className="row">
                        <a onClick={(e) => this.salvaContato(e)} style={{
                            color: 'white',
                            backgroundColor: '#011e48',
                            textAlign: 'center',
                            fontSize: '25px',
                            padding: '0.5em 1em'

                        }} href="#">CADASTRAR</a>

                    </div>

                </div>
            </div>
        )
    }
}

export default Cadastro