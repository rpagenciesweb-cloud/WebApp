import style from "./Header.module.css"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <div className={style.header}>
            <div className={style.Upper}>
                <p>Since - 2022</p>
                <p>GSTN - 33EUTPP9727C1Z3</p>
            </div>
            <div className={style.lower}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={style.naming}>
                    <div><h1>RP Agencies</h1></div>
                    <div><p>Best Products Lowest Price</p></div>
                </div>
            </div>
        </div>
    )
}

export default Header