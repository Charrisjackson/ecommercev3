import { useState } from "react";  // Import React's useState hook to manage component state
import '../styles/products.css';  // Import CSS file for styling

export default function Filter({ productItems, filterItems, setData, originalData, filterPrices }) {
  // State to track the selected category for filtering products
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State to track the selected price range for filtering
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity]); 

  /**
   * Handles category selection by updating the selected category state
   * and applying filters based on the selected category and price range.
   
   */
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category state
    applyFilters(category, selectedPriceRange[0], selectedPriceRange[1]); // Apply both category and price filters
  };

  /**
   * Handles price range selection from the dropdown.
   * Updates the price range state and applies filters.
   * @param {object} e - The event object from the dropdown selection.
   */
  const selectPrice = (e) => {
    const value = e.target.value;  // Get the selected value from dropdown
    console.log("Selected Price Range:", value);
    
    let min = 0;  
    let max = Infinity;

    // Determine price range based on selected option
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

    setSelectedPriceRange([min, max]);  // Update price range state
    applyFilters(selectedCategory, min, max);  // Apply both category and price filters
  };

  /**
   * Filters products based on the selected category and price range.
   * @param {string|null} category - Selected category (null if 'All' is selected)
   * @param {number} min - Minimum price range
   * @param {number} max - Maximum price range
   */
  const applyFilters = (category, min, max) => {
    let filteredData = originalData.filter((product) => {
      const price = parseFloat(product.price.replace(/[^\d.-]/g, '')); // Convert price to number
      const priceMatch = price >= min && price <= max; // Check if price is within range
      const categoryMatch = category ? product.category === category : true; // Check category match

      return priceMatch && categoryMatch; // Only include products matching both filters
    });

    setData(filteredData); // Update state with the filtered product list
  };

  return (
    <>
  
      <div id="filterbtns">
        {/* Render category filter buttons */}
        {productItems.map((item, index) => (
          <button key={index} onClick={() => handleCategoryClick(item)} className="btnsf">
            {item}
          </button>
        ))}
        

        {/* Button to reset filters and show all products */}
        <button onClick={() => setData(originalData)} className="btnsf">All</button>

        {/* Price range dropdown for filtering */}
        <div className="filterprice">
          <label htmlFor="prices"> </label>
          <select name="prices" id="prices" onChange={selectPrice}>
            <option value="selection option">Select price</option>
            <option value="Under $50">Under $50</option>
            <option value="$50-100">$50-100</option>
            <option value="$100+">$100+</option>
          </select>
        </div>
      </div>
    </>
  );
}
