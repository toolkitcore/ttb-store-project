import ResultSearch from 'components/ResultSearch';
import ProductCarousel from './ProductCarousel';
import React from 'react';
import FilterOptions from './FilterOptions';

function SearchFilterPage() {
  return (
    <div className="container">
      {/* Carousel */}
      <ProductCarousel />

      {/* Bộ lọc */}
      <FilterOptions />

      {/* Kết quả lọc */}
      <ResultSearch />
    </div>
  );
}

export default SearchFilterPage;
