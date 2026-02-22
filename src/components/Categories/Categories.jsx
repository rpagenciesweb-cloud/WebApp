import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Categories.module.css";
import { FaBars } from "react-icons/fa";

function Categories() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSublimationChange = (e) => {
        const value = e.target.value;
        if (value) {
            navigate(`/category/${value}`);
            e.target.value = "";
        }
    };

    return (
        <div className={style.header}>
            <div className={style.menuIcon} onClick={() => setOpen(!open)}>
                <FaBars /> <p>Menu</p>
            </div>

            <div className={`${style.container} ${open ? style.show : ""}`}>
                <div><Link to="/">Home</Link></div>
                {/*<div><Link to="/category/Photo Frames">Photo Frames</Link></div>*/}
                <div className={style.selectHolder}>
                    <select
                        className={style.select}
                        onChange={handleSublimationChange}
                        defaultValue=""
                    >
                        <option value="">Photo Frames</option>
                        <option value="Plastic Frames">Plastic Frames</option>
                        <option value="LED Frames">LED Frames</option>
                        <option value="Polystyrene Frames">Polystyrene Frames</option>
                        <option value="Wooden Frames">Wooden Frames</option>
                        <option value="Frame Machines">Machines</option>
                        <option value="Frame Accessories">Accessories</option>
                    </select>
                </div>
                <div className={style.selectHolder}>
                    <select
                        className={style.select}
                        onChange={handleSublimationChange}
                        defaultValue=""
                    >
                        <option value="">Sublimations</option>
                        <option value="Mug Items">Mug Items</option>
                        <option value="Water Bottles">Water Bottles</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Pillows">Pillows</option>
                        <option value="Sublimation Machines">Machines</option>
                        <option value="Sublimation Accessories">Accessories</option>
                    </select>
                </div>

                <div><Link to="/category/LED Frames">LED Lamps</Link></div>
                <div><Link to="/category/Gifts">Gifts</Link></div>
                {/*<div><Link to="/category/Laser Prints">Laser Prints</Link></div>*/}
                <div className={style.selectHolder}>
                    <select
                        className={style.select}
                        onChange={handleSublimationChange}
                        defaultValue=""
                    >
                        <option value="">Laser Prints</option>
                        <option value="Prints">Prints</option>
                        <option value="Laser Machines">Machines</option>
                        <option value="Laser Accessories">Accessories</option>
                    </select>
                </div>
                <div><Link to="/category/Photo Shoots">Photo Shoots</Link></div>
                <div><Link to="/category/Tour Packages">Tour Packages</Link></div>
                <div><Link to="/category/Corporate Gifts">Corporate Gifts</Link></div>
            </div>
        </div>
    );
}

export default Categories;
