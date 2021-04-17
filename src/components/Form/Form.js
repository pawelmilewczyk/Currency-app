import { useEffect } from "react";
import "./Form.scss";
import Button from "../../shared/Button/Button";
import { connect } from "react-redux";
import * as action from "../../store/actions";

const Form = (props) => {
  useEffect(() => {
    props.getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectHandler = (e) => {
    const inputValue = e.target.value;

    if (inputValue !== "SELECT") props.selectCurrency(inputValue);
    else props.selectCurrency(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addCurrency(props.currencyToAdd);
  };

  return (
    <form className="Form">
      <h1 className="Title">Choose your favorites currencies</h1>
      <select onChange={selectHandler}>
        <option>SELECT</option>
        {props.currencies.map((currency) => (
          <option value={currency.code} key={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
      <Button
        type={"Submit"}
        clicked={submitHandler}
        disabled={!props.currencyToAdd}
      >
        Add
      </Button>
      <Button type={"Remove"}>Remove all</Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
    currencyToAdd: state.currencyToAdd,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(action.getData()),
    selectCurrency: (value) => dispatch(action.selectCurrency(value)),
    addCurrency: (value) => dispatch(action.addCurrency(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
