import PropTypes from "prop-types";

export default function InputSearch({ id, label, onChange }) {
  return (
    <>
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input
        type="search"
        placeholder={label}
        id={id}
        className="border-gray-300mpx-4 focus-border-indigo-500 rounded-md py-2 shadow-sm focus:ring-indigo-500"
        onChange={onChange}
      ></input>
    </>
  );
}

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
