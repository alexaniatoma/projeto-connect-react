import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import S from './header.module.scss'
import { useState } from 'react'

export default function Header() {

    const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
        <header className= {S.header}>
            <section>
                <Link to="/">
                    <img src={Logo} alt="Logo do logo do site sendo representada por uma mão segurando um coração, simbolizando apoio" />
                </Link>
            </section>
                <nav className={S.nav}>                    
                    <Link className={S.link} to="/doacao">Doação</Link>
                    <Link className={S.link} to="/voluntariado">Voluntariado</Link>
                    <Link className={S.link} to="/mentoria">Mentorias</Link>
                    <Link className={S.link} to="/eventos">Eventos</Link>                   
                </nav>
                <img className={S.imgUser}src="https://avatars.githubusercontent.com/u/118212495?v=4" alt="" 
                onClick={() => setMenuAberto(!menuAberto)}/>                    
        </header>
        <nav className={menuAberto ? S.navUser : S.menuFechado}>
            <Link to="/usuario">Vinicius Bispo</Link>
            <Link >Meu Voluntariado</Link>
            <Link >Configurações da conta</Link>
            <Link >Sair</Link>
        </nav>
        
    </>
  )
}
