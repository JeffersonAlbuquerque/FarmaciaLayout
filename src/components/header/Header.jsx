import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from './header.module.scss'
import LoginU from '../../Pages/LoginUsuario/LoginCadastro';
import Inicio from '../../Pages/Inicio/Inicio.jsx'

//images 

import logoW from '../../assets/logoRaiaWebSite.png'
import lupa from '../../assets/lupa.png'
import usuario from '../../assets/usuario.png'
import pedidos from '../../assets/pedidos.png'
import carrinho from '../../assets/carrinhoCompras.png'



export default function Header() {
    
    return (
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.headerFilho}>
                    <Link className={s.link} to='/'><img className={s.logo} src={logoW} alt="logo-site" /></Link>

                    <section className={s.barraDeBusca}>
                        <input type="search" name="" id="" placeholder="O que você está buscando?" required />
                        <img src={lupa} alt="" />
                    </section>
                    <nav>
                        <ul>
                            <li>
                                <img src={usuario} alt="" />
                                <div>
                                    <Link className={s.link} to='/login'>Bem vindo!</Link>
                                    <span>Entrar ou Cadastrar</span>
                                </div>
                            </li>
                            <li>
                                <img src={pedidos} alt="" />
                                <div>
                                    <Link className={s.link} to='/loginsdad'>Acompanhar</Link>
                                    <span>Pedidos</span>
                                </div>
                            </li>
                            <li>
                                <img src={carrinho} alt="" />
                                <div>
                                    <Link className={s.link} to='/adas'>Cesta</Link>
                                    <span>R$ 0,00</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<LoginU />} />
            </Routes>
        </BrowserRouter>
    )
}