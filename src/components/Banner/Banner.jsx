import {useRef, useState, useEffect } from "react"
import style from "./Banner.module.css"
import { Link } from "react-router-dom"
import gift from "./gift.jpg"
import cup from "./cup.jpg"
import pillow from "./pillowbanner.jpg"
import heart from './heart-banner.jpg'
import mug from './pictureMug.jpg'

function Banner() {
    const wrapperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const totalSlides = 5;

    const handleScroll = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const index = Math.round(
        wrapper.scrollLeft / wrapper.clientWidth
    );
    setActiveIndex(index);
};

    useEffect(() => {
    const interval = setInterval(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const nextIndex = (activeIndex + 1) % totalSlides;

        wrapper.scrollTo({
            left: wrapper.clientWidth * nextIndex,
            behavior: "smooth",
        });

        setActiveIndex(nextIndex);
        }, 10000);

        return () => clearInterval(interval);
    }, [activeIndex]);


    
    return (
        <section className={style.container}>
            <div className={style["wrapper-container"]}>
                <div className={style["wrapper"]} ref={wrapperRef} onScroll={handleScroll}>
                    <img id="gift" src={gift} alt="Gift" />
                    <img id="cup" src={cup} alt="cup" />
                    <img id="pillow" src={pillow} alt="pillow" />
                    <img id="heart" src={heart} alt="heart" />
                    <img id="mug" src={mug} alt="mug" />
                </div>
                <div className={style.navigator}>
                    {[0, 1, 2, 3,4].map((i) => (
                        <a
                            className={activeIndex === i ? style.active : ""}
                            onClick={() => {
                                wrapperRef.current.scrollTo({
                                    left: wrapperRef.current.clientWidth * i,
                                    behavior: "smooth",
                                });
                                setActiveIndex(i);
                            }}
                        />

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Banner