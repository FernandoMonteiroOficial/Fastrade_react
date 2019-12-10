import React, { Component } from 'react';

class CadastroCliente extends Component {

    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return {
            <div className = "container" >
            <div className="card">
                <form method="POST" id="form_cadastro">
                    <div className="formulario_cadastro">

                        <div className="direito">
                            <h1 className="criarconta">Criar uma conta</h1>
                            <label for="" />

                            <span>Tipo de usuario </span>

                            <div className="tipodeusuario">

                                <div>
                                    className="botao"
                                        <input
                                        placeholder=""
                                        type="radio"
                                        name="usuario"
                                        value="Cliente" 
                                        className="radio"/>
                                </div>

                                <div>
                                    className="botao"
                                        <input
                                        placeholder=""
                                        type="radio"
                                        name="usuario"
                                        value="Fornecedor"
                                        className="radio"/>
                                </div>

                                <div>
                                    <input
                                        placeholder="Digite o seu email "
                                        type="text"
                                        name="Email" 
                                        className=""/>
                                </div>

                                <div>
                                    <input
                                       placeholder="Digite sua senha "
                                       type="text"
                                       name="Senha" 
                                       value=""
                                       className=""/>
                                </div>


                                <div>
                                    <input
                                        placeholder="Digite o nome completo "
                                        type="text"
                                        name="Nome" aria-label="Digitar o nome copleto"
                                        className=""/>
                                </div>


                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite seu telefone..."
                                        name="telefone" aria-label="Digitar seu telefone"
                                        className=""/>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite o CNPJ..."
                                        name="CNPJ" aria-label="Digitar o CNPJ"
                                        className=""/>
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        name="data" aria-label="Digitar a data do Nascimento"
                                        className=""/>
                                </div>


                            </div>

                            <div className="esquerdo">

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite o Endereço"
                                        name="Endereço" aria-label="Digitar o endereço" 
                                        className=""/>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        placeholder="000..."
                                        name="Numero" aria-label="numero" 
                                        className=""/>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Bairro"
                                        name="Bairro" aria-label="Digitar o Bairro" 
                                        className=""/>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="00000-000"
                                        name="Cadastro" aria-label="Digitar o CEP"
                                        className=""/>
                                </div>


                                <div>
                                    <input
                                        type="text"
                                        placeholder="Estado"
                                        name="Cadastro" aria-label="Digitar o Estado" 
                                        className=""/>
                                </div>


                                <diiv>
                                    <input
                                        type="text"
                                        placeholder="Complemento"
                                        name="Cadastro" aria-label="Digitar o complemento"
                                        className=""/>
                                    </div>

                                <div>
                                    <button
                                        type="submit"
                                        onClick=""
                                        value=""
                                        className="">Salvar</button>
                                </div>

                </form>
                        </div>
                    </div>
                    </div>
                    </div>

                    };
                }
                        }
                
export default CadastroCliente;