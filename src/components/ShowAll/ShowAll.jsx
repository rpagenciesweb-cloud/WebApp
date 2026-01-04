import style from './ShowAll.module.css'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ShowAll() {
    const navigate = useNavigate();

    const handleClick=()=>{
        navigate(`/category/Photo Frames`);
    };
    return (
        <div className={style.showAllContainer}>
            <div className={style.btnHolder}>
                <button className={style.showAllBtn} onClick={handleClick}>Show More </button>
                <FaArrowRight />
            </div>
        </div>
    )
}

export default ShowAll