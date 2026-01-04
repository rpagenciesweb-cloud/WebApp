import style from './Product.module.css'
import { useNavigate } from "react-router-dom";


function Product({ product }) {
    const navigate = useNavigate();

    const handleKnowMore=()=>{
        navigate(`/productInfo/${product.id}`);
    };
    return (
        <div className={style.container}>
            <div className={style.upperHalf}>
                <img src={product.imageUrl} alt={product.productName} />
            </div>
            <div className={style.lowerHalf}>
                <div className={style.data}>
                    <h2 className={style.productTitle}>{product.productName}</h2>
                    <p className={style.productDesc}>{product.description.slice(0, 80)}...</p>
                    <p className={style.priceTag}>Starts from <span>₹{Math.min(...Object.values(product.priceChart))}</span> onwards</p>
                </div>
                <div className={style.btn}>
                    <button onClick={handleKnowMore}>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default Product