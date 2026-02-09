import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import S from './header.module.scss'
import { useState, useEffect } from 'react'


export default function Header() {

    const [menuAberto, setMenuAberto] = useState(false);
    const [isMobile, setMobile] = useState(window.innerWidth <= 768);

    useEffect(()=> {
        function menuMobile() {
            setMobile(window.innerWidth <= 768);
            if(window.innerWidth > 768) {
                setMenuAberto(false);
            }
        }
        
        window.addEventListener('resize', menuMobile);
        return () => {
            window.removeEventListener('resize', menuMobile);
        }
    },[]);

  return (
    <>
        <header className= {S.header}>
            <section>
                <Link to="/">
                    <img src={Logo} alt="Logo do logo do site sendo representada por uma mão segurando um coração, simbolizando apoio" />
                </Link>
            </section>
            {!isMobile && (
                <nav className={S.nav}>                    
                    <Link className={S.link} to="/doacao">Doação</Link>
                    <Link className={S.link} to="/voluntariado">Voluntariado</Link>
                    <Link className={S.link} to="/mentoria">Mentorias</Link>
                    <Link className={S.link} to="/eventos">Eventos</Link>                   
                </nav>
            )}
                <img className={S.imgUser}src="https://avatars.githubusercontent.com/u/86957848?v=4" alt="" 
                onClick={() => setMenuAberto(!menuAberto)}/>                    
        </header>
        <nav className={menuAberto ? S.navUser : S.menuFechado}>
            <Link to="/usuario">Alexania Toma</Link>
            <Link >Meu Voluntariado</Link>
            <Link >Configurações da conta</Link>
            {isMobile && (
                <div>
                    <Link className={S.link} to="/doacao" onClick={() => setMenuAberto(false)}>Doação</Link>
                    <Link className={S.link} to="/voluntariado" onClick={() => setMenuAberto(false)}>Voluntariado</Link>
                    <Link className={S.link} to="/mentoria" onClick={() => setMenuAberto(false)}>Mentorias</Link>
                    <Link className={S.link} to="/eventos" onClick={() => setMenuAberto(false)}>Eventos</Link>   
                </div>
            )}
                <Link >Sair</Link>            
        </nav>
        
    </>
  )
}
