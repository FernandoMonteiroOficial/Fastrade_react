import React, { Component } from 'react';
import '../../assets/css/CadastroCliente.css'
import Header from '../../components/cabecalho/cabecalho'



class CadastroCliente extends Component {

    constructor() {
        super()
        this.state = {
            CadastrarCliente: {
                idTipoUsuario: "",
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                ruaAv: "",
                numero: "",
                cep: "",
                bairro: "",
                estado: ""
                // fotoUrlUsuario: React.createRef(),

                
            },

        }
    }
    postSetState = (input) => {
        this.setState({
            CadastrarCliente: {
                ...this.state.CadastrarCliente,
                [input.target.name]: input.target.value
            }
        })
    }


    CadastrarCliente = (e) => {
        e.preventDefault();

        // Declara um objeto do tipo FormData, já que o Backend recebe este tipo.
        let usuario = new FormData();



        usuario.set("idTipoUsuario", this.state.CadastrarCliente.idTipoUsuario);
        usuario.set("nomeRazaoSocial", this.state.CadastrarCliente.nomeRazaoSocial);
        usuario.set('cpfCnpj', this.state.CadastrarCliente.cpfCnpj);
        usuario.set('email', this.state.CadastrarCliente.email);
        usuario.set('senha', this.state.CadastrarCliente.senha);
        usuario.set('celularTelefone', this.state.CadastrarCliente.celularTelefone);
        usuario.set('ruaAv', this.state.CadastrarCliente.ruaAv);
        usuario.set('numero', this.state.CadastrarCliente.numero);
        usuario.set('cep', this.state.CadastrarCliente.cep);
        usuario.set('bairro', this.state.CadastrarCliente.bairro);
        usuario.set('estado', this.state.CadastrarCliente.estado);
        // usuario.set('fotoUrlUsuario', this.state.CadastrarCliente.fotoUrlUsuario.current.files[0]);
        usuario.set('complemento', this.state.CadastrarCliente.complemento);

        // Se o documento for = a 14 o usuario é vendedor
        if (this.state.CadastrarCliente.cpfCnpj.length === 14) {
            usuario.set("idTipoUsuario", 2)
            // Se o documento for = a 11 ele é cliente
        } else if (this.state.CadastrarCliente.cpfCnpj.length === 11) {
            usuario.set("idTipoUsuario", 1)
        }
        console.log(this.state.CadastrarCliente);

        fetch('http://localhost:5000/api/usuario', {
            method: "POST",
            body: usuario,
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    render() {
        return (
            <div className="container_cadastro" >
                <Header {...this.props} />
                <div className="card">
                    <form method="POST" id="form_cadastro" onSubmit={this.CadastrarCliente}>
                        <div className="formulario_cadastro">

                            <div className="direito">
                                <h1 className="criarconta">Criar uma conta</h1>
                                <label for="" />



                                <div>
                                    <div>
                                        <input
                                            placeholder="Digite o seu email "
                                            type="text"
                                            name="email"
                                            value={this.state.CadastrarCliente.email}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            placeholder="Digite sua senha "
                                            type="text"
                                            name="senha"
                                            value=""
                                            value={this.state.CadastrarCliente.senha}
                                            onChange={this.postSetState}
                                            className="" />

                                    </div>
                                    <div>
                                        <input
                                            placeholder="Digite o nome completo "
                                            type="text"
                                            name="nomeRazaoSocial" aria-label="Digitar o nome copleto"
                                            value={this.state.CadastrarCliente.nomeRazaoSocial}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Digite seu telefone..."
                                            name="celularTelefone" aria-label="Digitar seu telefone"
                                            value={this.state.CadastrarCliente.celularTelefone}
                                            onChange={this.postSetState}
                                            className="" />
                                        required
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Digite o CNPJ..."
                                            name="cpfCnpj" aria-label="Digitar o CNPJ"
                                            value={this.state.CadastrarCliente.cpfCnpj}
                                            onChange={this.postSetState}
                                            className="" />

                                    </div>
                                </div>

                                <div className="esquerdo">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Digite o Endereço"
                                            name="ruaAv" aria-label="Digitar o endereço"
                                            value={this.state.CadastrarCliente.ruaAv}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="000..."
                                            name="numero" aria-label="numero"
                                            value={this.state.CadastrarCliente.numero}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Bairro"
                                            name="bairro" aria-label="Digitar o Bairro"
                                            value={this.state.CadastrarCliente.bairro}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="00000-000"
                                            name="cep" aria-label="Digitar o CEP"
                                            value={this.state.CadastrarCliente.cep}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Estado"
                                            name="estado" aria-label="Digitar o Estado"
                                            value={this.state.CadastrarCliente.estado}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="complemento"
                                            name="Cadastro" aria-label="Digitar o complemento"
                                            value={this.state.CadastrarCliente.complemento}
                                            onChange={this.postSetState}
                                            className="" />
                                    </div>
                                    {/* <div>
                                        <input
                                            type="file"
                                            placeholder="Coloque uma foto sua"
                                            aria-label="Coloque uma foto sua"
                                            name="fotoUrlUsuario"
                                            ref={this.state.CadastrarCliente.fotoUrlUsuario}
                                        />
                                    </div> */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="">Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        );
    }
}

export default CadastroCliente;