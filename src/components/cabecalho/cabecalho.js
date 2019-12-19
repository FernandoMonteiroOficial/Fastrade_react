import React, { Component } from 'react';
import Menu from '../../assets/img/menu.png';
import '../../assets/css/cabecalho.css';
import Logotipo from '../../assets/img/FONTE-1.png';
import User from '../../assets/img/usuario.png';
import Lupa from '../../assets/img/search.png';
import { Link } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../../services/auth';



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    logout = () => {
        // Remove o token do localStorage
        localStorage.removeItem("usuario-fastrade");
        console.log(this.props)
        // Redireciona para o endereço '/'
        this.props.history.push("/home");
    }

    listaAtualizada = () => {
        fetch("https://localhost:5001/api/oferta/")
            .then(response => response.json())
            .then(data => this.setState({ listaNomeOferta: data }));
    }

    toggleIsOpen = () => {
        this.setState({isOpen : !this.state.isOpen}, () => console.log(this.state.isOpen));
    }

    render() {

        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>

                <header>
                    <div className="container">
                        <div className="sub_menu">
                            <img src={Logotipo} alt="Logo do site" className="logo" />
                            <div className="pesquisa">
                                <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                    className="txt_busca" />
                                <img src={Lupa} alt="Buscar" className="btn_busca" />
                            </div>

                            <div><Link to="/login"><img src={User} alt="login" className="btn_login" /></Link>
                                {usuarioAutenticado() ? (
                                    <>
                                        <a href="index_comprador.html"><img src={"http://localhost:5000/" + parseJwt().FotoUsuario} alt="" /></a>
                                    </>
                                ) : (
                                        this.props.headerprops
                                    )}

                            </div>
                        </div>
                        <nav className="menuHeader">
                            <ul>
                                <li><Link to="/Home">HOME</Link></li>
                                <li><Link to="/produtos">PRODUTOS</Link></li>
                                <li><Link to="/Dicas">DICAS</Link></li>
                                <li><Link to="/quemSomos">QUEM SOMOS</Link></li>
                            </ul>
                        </nav>
                    </div>

                </header>
            </div>
        );
    }
}

export default Header;