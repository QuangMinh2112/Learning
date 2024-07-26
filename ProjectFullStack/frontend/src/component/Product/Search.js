import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "./Search.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandle = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/product/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const handleChangeValue = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <Fragment>
      <MetaData title="Tìm kiếm sản phẩm" />
      <form className="searchBox" onSubmit={searchSubmitHandle}>
        <input
          type="text"
          placeholder="Search a Product..."
          onChange={handleChangeValue}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
