import style from '../ProductInfo/ProductInfo.module.css'
import Header from "../Header/Header"
import Categories from "../Categories/Categories"
import Contact from "../Contact/Contact"
import Copyright from "../Copyright/Copyright"
import ProductDetails from "../ProductDetails/ProductDetails"
import { useParams } from "react-router-dom";

function ProductInfo() {
    const { productId } = useParams();
    return (
        <div className={style.main}>
            <div className={style.content}>
                <Header />
                <Categories />
                <ProductDetails productId={productId} />
            </div>
            <Contact  />
            <Copyright />
        </div>
    )
}

export default ProductInfo