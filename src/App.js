import "./App.css";
import MenuBar from "./components/MenuBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Harrington Jacket",
      url: "https://www.fredperry.com/media/catalog/product/cache/f0494950fc455c9356f1f561e7545603/J/7/J7320_795_8.JPG",
      description:
        "Our Harrington jacket, made in England like it always has been. Constructed from a tough cotton/poly blend, with all its signature design details: flap pockets, buttoned neck and a tartan lining.",
        price: "€ 170",
        amount: 0,
    },
    {
      id: 2,
      title: "Brentham Jacket",
      url: "https://www.fredperry.com/media/catalog/product/cache/d9f1c7ee3f6f657723fdb27a2065b44c/J/2/J2660_638_V2_Q323_MOD1_FRONT.JPG",
      description:
        "A fully-lined nylon-twill sports jackets designed with our signature twin tipping inside the neck.",
        price: "€ 110",
        amount: 0,
    },
    {
      id: 3,
      title: "Button Through Mac Black",
      url: "https://www.fredperry.com/media/catalog/product/cache/2f1ca1b0ff6bb82d7371f9b0a2622b62/J/6/J6515_102_V2_Q323_MOD1_FRONT.JPG",
      description:
        "Our recycled nylon shell mac - a classic silhouette with sharp details.",
        price: "€ 150",
        amount: 0,
    },
    {
      id: 4,
      title: "Patch Pocket Zip Through Jacket",
      url: "https://www.fredperry.com/media/catalog/product/cache/999f76f6a65652c494b7235c30fc8064/J/4/J4559_248_V2_Q323_MOD1_FRONT.JPG",
      description:
        "A zip-through jacket in durable recycled nylon, fitted with a warm fleece lining and embroidered Fred Perry branding to the back neck.",
        price: "€ 130",
        amount: 0,
    },
    
  ]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    console.log("Br proizvoda u korpi: " + cartNum);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} isShop={1} />,
              <Shop products={products} onAdd={addProduct} />
            </>
          }
        />
        <Route path="/" element={<MenuBar cartNum={cartNum} isHome={1} />} />
        <Route
          path="/cart"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} />,
              <Cart products={cartProducts} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
