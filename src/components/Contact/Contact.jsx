import style from "./Contact.module.css"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

function Contact() {
    return (
        <footer className={style.footer}>
            <h2 className={style.contactUs}>Contact Us</h2>
            <div className={style.contactContainer}>
                <div className={style.left}>
                    <div className={style.number}>
                        <div className={style.tele}>
                            <GiRotaryPhone /><p>+914512909068</p>
                        </div>
                        <div className={style.Mbl}>
                            <FaPhoneAlt /><p>+919486185588</p>
                        </div>
                    </div>
                    <div className={style.email}>
                        <MdEmail /><p>supplier@rpagenciesswfw.in</p>
                    </div>
                    <div className={style.location}>
                        <FaMapLocationDot /><p>38, 2nd Floor DK Complex (Near Hotel Archana), Scheme Road(Bus stand East Side), Dindigul, Tamilnadu -624003</p>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.businessHours}>
                        <p className={style.subhead}>Business Hours</p>
                        <p>Mon - Fri : 9:00 AM - 9:00 PM</p>
                        <p><pre>Sun          : 9:00 AM - 2:00 PM</pre></p>
                    </div>
                    <div className={style.mediaContainer}>
                        <p className={style.subhead}>Follow us</p>
                        <div className={style.holder}>
                            <a href="https://www.facebook.com/people/Sublimation-Photos-Frame-Works/pfbid02cXwMqH3CDjDRaQLogVQy2iVtVkmUPK9tzi4U5NFmenoLVJudbWkWjN2AW7ytsTk4l/?rdid=uQuiWB4b0n2LPHXl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HhN9FMHW2%2F" target="_blank"
rel="noopener noreferrer" className={`${style.icon} ${style.facebook}`}>
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/sublimationphotoframes?utm_source=qr&igsh=MW10eW4wcTM2dnlsZA==" target="_blank"
rel="noopener noreferrer" className={`${style.icon} ${style.instagram}`}>
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/message/VCIGVFQGIXKQB1" target="_blank"
rel="noopener noreferrer" className={`${style.icon} ${style.whatsapp}`}>
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact