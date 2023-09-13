import React from 'react'


import FilterCategory from '../common/Main/filtercategory'
import Filter from '../common/Main/Filter/Filter';
import Following from '../common/Main/Filter/Following';

const FilterContainer = () => {
  return (
    <div className="w-full px-4 py-2 flex justify-between items-center">
      <Following/>
      <FilterCategory />
      <Filter/>
    </div>
  );
}

export default FilterContainer
