import "./App.css";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <footer>
            <p>Created by Bhavika Vasani</p>
            <Link to="https://github.com/bhavikavasani/my_ecomm-project-react" >
            <img className="github-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" />
          </Link>
        </footer>
      </Router>
    </ShopContextProvider>
    </div >
  );
}

export default App;

