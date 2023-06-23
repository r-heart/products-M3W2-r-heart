import PropTypes from "prop-types";
import { InputCheckbox, InputSearch, Select } from "./Form";

// TODO: receive state dispatch functions as props

export default function SearchBar({ categories }) {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <InputSearch id="search" label="Search" />

      {/* Prop Drilling */}
      <Select id="category" label="Category" options={categories} />
      <InputCheckbox id="in-stock-only" label="Only show products in stock" />
    </form>
  );
}

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
