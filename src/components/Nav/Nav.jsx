import { Link } from "react-router-dom";
import style from "./Nav.module.css"
const Nav = () => {
    return (

        <div>
             <nav className={style.nav}>
            <div>
                <Link to="/home" className={style.linkTitle}><h1 className={style.title}>TravelWifi</h1></Link>
                <Link to="/home" className={style.linkTitle}><p className={style.parrafoGoFurter}>Go Further.</p></Link>
            </div>

            <div className={style.links}>
                <Link className={style.link}>Para ti</Link>
                <Link className={style.link}>Para su negocio</Link>
                <Link className={style.link}>Tiendas y cobertura</Link>
            </div>
            <div className={style.divInicioSesion}>
                <span className={style.spanLogin}>TravelWifi</span><Link className={style.spanLogin}><span >EXCHANGE</span></Link>
                <Link className={style.inicioSesion}>INICIO DE SESION</Link>
                <span className={style.line}></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" alt="" className={style.img} />
                <Link className={style.linkIcon}>$ USD</Link>
                <Link className={style.linkIcon}>user</Link>
                <Link className={style.linkIcon}>search</Link>
                <Link className={style.linkIcon} to="/carrito" >carrito</Link>
            </div>
        </nav>
        </div>
    )
}


export default Nav;