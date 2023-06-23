import PropTypes from "prop-types";
import InputCheckbox from "./Form/InputCheckbox";
import InputSearch from "./Form/InputSearch";

export default function SearchBar({ categories }) {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <InputSearch id="search" label="Search" />
      <label htmlFor="category" className="sr-only">
        Category
      </label>
      <select id="category">
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <InputCheckbox id="in-stock-only" label="Only show products in stock" />
    </form>
  );
}

SearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
