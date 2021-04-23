import Contact from "../Contact";
import PropTypes from "prop-types";

const ContactList = (props) => {
  const { contactsList, onDelete } = props;
  return (
    <ul>
      {contactsList.map((item) => {
        return <Contact item={item} key={item.id} onDelete={onDelete} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
