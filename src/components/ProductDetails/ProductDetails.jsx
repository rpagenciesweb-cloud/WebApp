import style from '../ProductDetails/ProductDetails.module.css'
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { FaWhatsapp } from "react-icons/fa";

function ProductDetails({ productId }) {

    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const ref = doc(db, "products", productId);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    const data = snap.data();
                    setProduct(data);

                    // ✅ set default size safely
                    const sizes = Object.keys(data.priceChart);
                    setSelectedSize(sizes[0]);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleGetQuote = () => {
            const phoneNumber = "919486185588";
            const message = `
        Product Name : ${product.productName}
        Category     : ${product.category}
        Size         : ${selectedSize}
        Image        : ${product.imageUrl}
            `.trim();
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
        };


    // ✅ SAFE GUARD
    if (!product || !selectedSize) {
        return <p style={{ textAlign: "center" }}>Loading product...</p>;
    }

    // ✅ sizes AFTER product exists
    const sizes = Object.keys(product.priceChart);
    return (
        <div className={style.detailMain}>
            <div className={style.wrapper}>
                <div className={style.upper}>
                    <div className={style.imgHolder}>
                        <img src={product.imageUrl} alt={product.productName} />
                    </div>
                </div>
                <div className={style.lower}>
                    <div className={style.productName}>
                        <h1>{product.productName}</h1>
                    </div>
                    <div className={style.desc}>
                        <h2 className={style.about}>About</h2>
                        <div className={style.desContent}>
                            <pre>
                                {product.description}
                            </pre>
                        </div>
                    </div>
                    <div>
                        <h2 className={style.about}>Sizes</h2>
                        <div className={style.sizeWrapper}>
                            {sizes.map(size => (
                                <div className={style.size} key={size}>
                                    <button
                                        onClick={() => setSelectedSize(size)}
                                        className={selectedSize === size ? style.activeSize : ""}
                                    >
                                        {size}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.price}>
                        <p>starts from <span>₹{product.priceChart[selectedSize]}</span> onwards</p>
                    </div>
                    <div className={style.quote}>
                        <div className={style.btnQuote}>
                            <button onClick={handleGetQuote}><FaWhatsapp />Get Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails