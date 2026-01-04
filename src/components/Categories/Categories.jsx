import { Link } from "react-router-dom"
import {useState} from 'react'
import style from "./Categories.module.css"
import { FaBars } from "react-icons/fa"

function Categories() {
    
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={style.menuIcon} onClick={() => setOpen(!open)}>
                <FaBars /> <p>Menu</p>
            </div>
        
            <div className={`${style.container} ${open ? style.show : ""}`}>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/category/Photo Frames">Photo Frames</Link></div>
                <div><Link to="/category/Sublimations">Sublimations</Link></div>
                <div><Link to="/category/LED Frames">LED Frames</Link></div>
                <div><Link to="/category/Gifts">Gifts</Link></div>
                <div><Link to="/category/Laser Prints">Laser Prints</Link></div>
                <div><Link to="/category/Photo Shoots">Photo Shoots</Link></div>
                <div><Link to="/category/Tour Packages">Tour Packages</Link></div>
                <div><Link to="/category/Corporate Gifts">Corporate Gifts</Link></div>
            </div>
        </>
    )
}

export default Categories