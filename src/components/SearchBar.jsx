export default function SearchBar() {
  return (
    <form className="my-4 flex flex-col items-center gap-y-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        placeholder="Search"
        id="search"
        className="border-gray-300mpx-4 focus-border-indigo-500 rounded-md py-2 shadow-sm focus:ring-indigo-500"
      ></input>
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
