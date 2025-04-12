import React from 'react';
import { Footer, Navbar, Product } from "../components";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <Product />
      </div>
      <Footer />
    </>
  );
};

export default Products;
