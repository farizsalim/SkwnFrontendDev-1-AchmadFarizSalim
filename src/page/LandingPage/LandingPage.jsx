import { useEffect, useState } from "react";
import Hero from "./component/Hero";
import { getCategories, getProducts } from "../../services/api";
import "./styles.css";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Footer from "./component/Footer";
import Categories from "./component/Categories";
import OurProducts from "./component/OurProducts";
import LimitDeals from "./component/LimitDeals";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts()
        .then((res) => {
            setProducts(res.data);
            setRandomIndex(Math.floor(Math.random() * res.data.length));
        })
        .catch((err) => {
            console.error("Error fetching products:", err);
        });
    
    getCategories()
        .then((res) => {
            setCategories(res.data);
        })
        .catch((err) => {
            console.error("Error fetching categories:", err);
        })
  }, []);

  const randomProduct = products[randomIndex];

  const handleRandomize = () => {
    if (products.length > 0) {
      setRandomIndex(Math.floor(Math.random() * products.length));
    }
  };

  return (
    <>
        <Hero randomProduct={randomProduct} handleRandomize={handleRandomize} />
        <Section1/>
        <Section2/>
        <Categories categories={categories} />
        <OurProducts products={products} />
        <LimitDeals/>
        <Footer/>
    </>
    )
};

export default LandingPage;
