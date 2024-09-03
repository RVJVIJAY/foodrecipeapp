import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialFilter = searchParams.get('filter') || 'all';
  const initialSort = searchParams.get('sort') || 'name';

  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);

  const products = [
    { id: 1, name: 'Laptop', category: 'electronics' },
    { id: 2, name: 'Shirt', category: 'clothing' },
    { id: 3, name: 'Phone', category: 'electronics' },
    { id: 4, name: 'Shoes', category: 'clothing' },
  ];

  const filteredProducts = products.filter(product => 
    filter === 'all' || product.category === filter
  );

  const sortedProducts = filteredProducts.sort((a, b) => 
    sort === 'name' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    setSearchParams({ filter: newFilter, sort });
  };

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSort(newSort);
    setSearchParams({ filter, sort: newSort });
  };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <label>
          Filter by category:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="clothing">Dress</option>
            <option value="clothing">Pant with Drawser</option>
          </select>
        </label>
        <label>
          Sort by name:
          <select value={sort} onChange={handleSortChange}>
            <option value="name">Ascending</option>
            <option value="name_desc">Descending</option>
          </select>
        </label>
      </div>
      <ul>
        {sortedProducts.map(product => (
          <li key={product.id}>{product.name} - {product.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
