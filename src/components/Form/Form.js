import { useEffect } from "react";
import "./Form.scss";
import Button from "../../shared/Button/Button";
import { connect } from "react-redux";
import * as action from "../../store/actions";

const Form = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  const selectHandler = (e) => {
    const inputValue = e.target.value;

    inputValue !== "SELECT"
      ? props.selectCurrency(inputValue)
      : props.selectCurrency(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const [selectedCurrency] = props.currencies.filter(
      (currency) => currency.code === props.currencyToAdd
    );
    props.addCurrency(selectedCurrency);
    props.updateCurrencies(
      props.currencies.filter((currency) => currency !== selectedCurrency)
    );

    props.selectCurrency(null);
  };

  const removeHandler = (e) => {
    e.preventDefault();
    props.removeAll();
    props.currencyToRemove("ALL currencies");
  };

  return (
    <form className="Form">
      <h1 className="Title">Choose your favorite currencies</h1>
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
      <Button
        type={"Remove"}
        clicked={removeHandler}
        disabled={!props.favorites.length}
      >
        Remove all
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
    favorites: state.favoriteCurrencies,
    currencyToAdd: state.currencyToAdd,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(action.getData()),
    selectCurrency: (value) => dispatch(action.selectCurrency(value)),
    addCurrency: (value) => dispatch(action.addCurrency(value)),
    updateCurrencies: (currencies) =>
      dispatch(action.updateCurrencies(currencies)),
    removeAll: () => dispatch(action.removeAllFavorites()),
    currencyToRemove: (currency) => dispatch(action.removeCurrency(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
