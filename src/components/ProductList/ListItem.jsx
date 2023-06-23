import PropTypes from "prop-types";

export default function ListItem({ id, name, price }) {
  return (
    <li key={id} className="border-y py-2">
      {name} - {price}
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
