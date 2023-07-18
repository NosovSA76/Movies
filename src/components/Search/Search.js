import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { SearchForm, SearchFormBtn, SearchFormInput } from "./search.styled";
import { notifyOptions } from "../../notify/notify";

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return toast.info("Please enter key words for search", notifyOptions);
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn>
        <HiMagnifyingGlass size="24" />
      </SearchFormBtn>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleChange}
      />
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
