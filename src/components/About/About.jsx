import style from "./About.module.css"
import logo from '../../assets/logo.png'

function About() {
    return (
        <div className={style.Container}>
            <h1 className={style.aboutUs}>About Us</h1>
            <div className={style.aboutContainer}>
                <div className={style.quotes}>
                    <h1><span>“</span>At Rp, we providing the worlds best quality products at lowest price<span>”</span> </h1>
                </div>
                <div className={style.logo}>
                    <div className={style.imgContainer}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={style.textContainer}>
                        <h3>SINCE - 2k22</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About