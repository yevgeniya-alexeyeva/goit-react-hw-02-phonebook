import PropTypes from "prop-types";

const Contact = (props) => {
  const { item, onDelete } = props;
  return (
    <li>
      <span>
        {item.name}: {item.number}
      </span>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default Contact;
