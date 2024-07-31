import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './components/product';
import BrandSelect from './components/brandSelect';
import CategorySelect from './components/categorySelect';
import PriceSelect from './components/priceSelect';
import Button from '@mui/material/Button';

const App = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/products?minPrice=${minPrice}&maxPrice=${maxPrice}&brand=${brand}&category=${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [minPrice, maxPrice, brand, category]);

  const handleMinPriceChange = (newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleResetFilters = () => {
    setMinPrice(0);
    setMaxPrice(500);
    setBrand("");
    setCategory("");
  };

  return (
    <div className="app-container">
      <div className="filter-container">
        <CategorySelect value={category} onChange={handleCategoryChange} />
        <BrandSelect value={brand} onChange={handleBrandChange} />
        <div className="price-select-container">
          <label htmlFor="price-select">Price Range:</label>
          <PriceSelect
            id="price-select"
            minPrice={minPrice}
            maxPrice={maxPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
      </div>

      <div className="product-container">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
