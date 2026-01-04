import Main from "./components/Main/Main"
import Admin from "./components/Admin/Admin"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SpecificCategory from "./components/SpecificCategory/SpecificCategory"
import ProductInfo from "./components/ProductInfo/ProductInfo"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/category/:categoryName" element={<SpecificCategory />}/>
        <Route path="/productInfo/:productId" element={<ProductInfo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
