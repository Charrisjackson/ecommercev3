import { useState } from "react";
import './products.css';

export default function Filter({ productItems, filterItems, setData, originalData, filterPrices }) {
  const [selectedCategory, setSelectedCategory] = useState(null); //tracks selected category from butons
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity]); // Default price range: [0, Infinity], tracks selected price range

  // Function to handle category filter selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    applyFilters(category, selectedPriceRange[0], selectedPriceRange[1]); // Apply both category and price filter
  };

  // Function to handle price range filter selection
  const selectPrice = (e) => {
    const value = e.target.value;
    console.log("Selected Price Range:", value);
    
    let min = 0;
    let max = Infinity;

    if (value === 'Under $50') {
      min = 0;
      max = 50;
    } else if (value === '$50-100') {
      min = 50;
      max = 100;
    } else if (value === '$100+') {
      min = 100;
      max = Infinity;
    }

    setSelectedPriceRange([min, max]); // Update price range state
    applyFilters(selectedCategory, min, max); // Apply both category and price filter
  };

  // Apply both category and price filters
  const applyFilters = (category, min, max) => {
    let filteredData = originalData.filter((product) => {
      const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));
      const priceMatch = price >= min && price <= max;
      const categoryMatch = category ? product.category === category : true;

      return priceMatch && categoryMatch; // Only include products that match both filters
    });

    setData(filteredData); // Update the filtered data state
  };

  return (
    <>
      <div id="filterbtns">
        {/* Category buttons */}
        {productItems.map((item, index) => (
          <button key={index} onClick={() => handleCategoryClick(item)} className="btnsf">
            {item}
          </button>
        ))}
        <button onClick={() => setData(originalData)} className="btnsf">All</button>

        {/* Price dropdown */}
        <div className="filterprice">
          <label htmlFor="prices"> Product Prices</label>
          <select name="cars" id="prices" onChange={selectPrice}>
            <option value="selection option">---</option>
            <option value="Under $50">Under $50</option>
            <option value="$50-100">$50-100</option>
            <option value="$100+">$100+</option>
          </select>
        </div>
      </div>
    </>
  );
}
