import PropTypes from "prop-types";

const Filter = (props) => {
  const { onInput } = props;
  return (
    <>
      <label htmlFor="filter">Find contacts by name or number</label>
      <input id="filter" onInput={onInput} type="text"></input>
    </>
  );
};

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default Filter;
