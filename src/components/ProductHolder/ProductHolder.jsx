import style from './ProductHolder.module.css'
import Product from '../Product/Product'
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function ProductHolder({category, mode}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            const snapshot = await getDocs(collection(db, "products"));
            let allProducts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // CATEGORY PAGE
            if (category) {
                const filtered = allProducts.filter(
                    p => p.category === category
                );
                setProducts(filtered);
                setLoading(false);
                return;
            }

            // TRENDING PAGE
            if (mode === "trending") {
                allProducts = allProducts.sort(() => Math.random() - 0.5);

                const selected = [];
                const usedCategories = new Set();

                for (const product of allProducts) {
                    if (!usedCategories.has(product.category)) {
                        selected.push(product);
                        usedCategories.add(product.category);
                    }
                    if (selected.length === 9) break;
                }

                if (selected.length < 9) {
                    for (const product of allProducts) {
                        if (!selected.find(p => p.id === product.id)) {
                            selected.push(product);
                        }
                        if (selected.length === 9) break;
                    }
                }

                setProducts(selected);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, mode]);

    if (loading) {
        return <p style={{textAlign: "center"}}>Loading products...</p>;
    }

    if (products.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "2rem" }}>
                <h2>We will serve soon 😊</h2>
                <p>Products for this category are coming shortly.</p>
            </div>
        );
    }

    return (
        <div className={style.holder}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductHolder
