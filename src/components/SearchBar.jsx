import PropTypes from "prop-types";
import { InputCheckbox, InputSearch, Select } from "./Form";

// TODO: receive state dispatch functions as props

export default function SearchBar({
  categories,
  setSearchTerm,
  setCategory,
  setInStockOnly,
}) {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <InputSearch
        id="search"
        label="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {/* Prop Drilling */}
      <Select
        id="category"
        label="Category"
        options={categories}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      <InputCheckbox
        id="in-stock-only"
        label="Only show products in stock"
        onChange={() => {
          setInStockOnly((prev) => !prev);
        }}
      />
    </form>
  );
}

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setInStockOnly: PropTypes.func.isRequired,
};
