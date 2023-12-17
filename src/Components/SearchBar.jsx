import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const Searchbar = ({ products }) => {
  const [searchIdea, setSearchIdea] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (value) => {
    setSearchIdea(value);
    const res = products.filter((e) =>
      e.title.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredData(res);
    console.log(products);
  };

  return (
    <div className="w-80 bg-white rounded-sm cursor-pointer">
      <div className="flex g-10 items-center border">
        <div className=" text-xl text-gray-400 p-2 ">
          <AiOutlineSearch />
        </div>
        <input
          className=" w-72 outline-none p-2 cursor-pointer"
          type="search"
          placeholder="Search products, brands and more..."
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>

      <div className="shadow-md flex flex-col ">
        {searchIdea !== "" &&
          filteredData.map((data, index) => (
            <div key={index} className="p-2 ">
              <Link
                to={`/product/${data.id}`}
                className="cursor-pointer hover:text-purple-700 "
              >
                {" "}
                <div className="flex gap-4 border-b ">
                  <img className="w-16" src={data.image} alt="" />
                  {data.title}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searchbar;
