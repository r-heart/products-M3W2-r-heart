import PropTypes from "prop-types";

export default function InputCheckbox({ id, label, onChange }) {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <input type="checkbox" id={id} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
}

InputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
