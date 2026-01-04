import Header from "../Header/Header"
import Categories from "../Categories/Categories"
import Banner from "../Banner/Banner"
import style from "./Main.module.css"
import ProductHolder from "../ProductHolder/ProductHolder"
import ShowAll from "../ShowAll/ShowAll"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Copyright from "../Copyright/Copyright"

function Main() {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <Header />
                <Categories />
                <Banner />
                <h1 className={style.trendingNow}>Trending Now</h1>
                <ProductHolder mode="trending" />
                <ShowAll />
                <About />
                <Contact  />
            </div>
            <Copyright />
        </div>
    )
}

export default Main