import InputSearch from "./Form/InputSearch";

export default function SearchBar() {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <InputSearch id="search" label="Search" />
      <label htmlFor="category" className="sr-only">
        Category
      </label>
      <select id="category">
        <option value="all">All</option>
        <option value="sporting goods">Sporting Goods</option>
        <option value="electronics">Electronics</option>
      </select>

      <div className="flex items-center gap-x-2">
        <input type="checkbox" id="in-stock-only" />
        <label htmlFor="in-stock-only">Only show products in stock</label>
      </div>
    </form>
  );
}
