import style from '../SpecificCategory/SpecificCategory.module.css'
import Header from "../Header/Header"
import Categories from "../Categories/Categories"
import Contact from "../Contact/Contact"
import Copyright from "../Copyright/Copyright"
import ProductHolder from '../ProductHolder/ProductHolder'
import { useParams } from "react-router-dom";

function SpecificCategory() {
    const { categoryName } = useParams();
    return (
        <div className={style.main}>
            <div className={style.content}>
                <Header />
                <Categories />
                <h1 className={style.categoryName}>{categoryName}</h1>
                <ProductHolder category={categoryName} />
            </div>
            <Contact  />
            <Copyright />
        </div>
    )
}

export default SpecificCategory