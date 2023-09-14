import React from "react";

import FilterCategory from "../common/Main/filtercategory";
import Filter from "../common/Main/Filter/filter";
import Following from "../common/Main/Filter/following";

const FilterContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full px-4 py-2 flex justify-between items-center">
        <Following />
        <div className="hidden lg:block">
          <FilterCategory />
        </div>
        <Filter />
      </div>
        <div className="block lg:hidden">
          <FilterCategory />
        </div>
    </div>
  );
};

export default FilterContainer;
