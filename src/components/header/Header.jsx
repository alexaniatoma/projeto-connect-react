import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import S from './header.module.scss'

export default function Header() {
  return (
    <>
        <header className= {S.header}>
            <section>
                <Link to="/">
                    <img src={Logo} alt="Logo do logo do site sendo representada por uma mão segurando um coração, simbolizando apoio" />
                </Link>
            </section>
                <nav>
                    <ul>
                        <Link to="/doacao">Doação</Link>
                        <Link to="/voluntariado">Voluntariado</Link>
                        <Link to="/mentoria">Mentoria</Link>
                        <Link to="/eventos">Eventos</Link>                     
                    </ul>
                </nav>
                <img src="https://avatars.githubusercontent.com/u/118212495?v=4" alt="" />                    
        </header>
        <Link to="/usuario">Vinicius Bispo</Link>
    </>
  )
}
