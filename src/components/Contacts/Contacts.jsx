const Contacts = (props) => {
  const { contactsList } = props;
  return (
    <ul>
      {contactsList.map((item) => {
        return (
          <li key={item.id}>
            Name: {item.name} Phone: {item.number}
          </li>
        );
      })}
    </ul>
  );
};
export default Contacts;
