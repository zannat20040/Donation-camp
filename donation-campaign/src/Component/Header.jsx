import React, { useState } from "react";
import SearchResult from "./SearchResult";


const Header = ({ donations }) => {
  const [searchCategory, setSearchCategory] = useState();
  const [filteredCategory, setFilteredCategory] = useState([]);

  const seachByCategory = (event) => {
    setSearchCategory(event.target.value);
  };

  const getCategory = () => {
    const searchInput = searchCategory.toLowerCase();
    const filteredData = donations.filter((item) =>
      item.category.toLowerCase()===searchInput
    );
    setFilteredCategory(filteredData);
  };

  console.log(filteredCategory);

  return (
    <>
      <div>
        <div className="hero bg-base-200 navbarstyle ">
          <div className=" mb-12 text-center container mx-auto flex flex-col">
            <div className="py-32">
              <h1 className="text-4xl font-bold mb-10">
                I Grow By Helping People In Need
              </h1>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Search here"
                  className="input input-bordered w-full max-w-xs rounded-e-none rounded-r-none-none"
                  onKeyDown={() => seachByCategory(event)}
                />
                <button
                  className="btn rounded-s-none bg-red-500 text-white"
                  onClick={getCategory}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SearchResult */}
      {/* <SearchResult filteredCategory={filteredCategory} /> */}
      {/* {filteredCategory.length > 0 && <SearchResult filteredCategory={filteredCategory} />} */}
    </>
  );
};

export default Header;
