import PropTypes from "prop-types";

export default function InputCheckbox({ id, label }) {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
}

InputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
