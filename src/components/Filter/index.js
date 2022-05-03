import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchFilter } from "../../redux/filterSlice";
import { getFilter, getFilters } from "../../redux/selector";
import "./Filter.scss";

const Filter = () => {
  const filtersList = useSelector(getFilters);
  const filter = useSelector(getFilter);
  const dipatch = useDispatch();

  const handleFilter = (type) => {
    dipatch(switchFilter(type));
  };

  return (
    <div className="filter">
      <h2 className="filter-title">Filter By Status</h2>
      <div className="filter-group">
        <ul className="filter-list">
          {filtersList &&
            filtersList.map((type, index) => (
              <li
                key={index}
                className={`filter-item ${type === filter && "active"}`}
                onClick={() => handleFilter(type)}
              >
                {type[0].toUpperCase() + type.slice(1)}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
