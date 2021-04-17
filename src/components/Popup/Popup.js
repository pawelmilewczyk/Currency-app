import "./Popup.scss";
import Button from "../../shared/Button/Button";
import * as action from "../../store/actions";
import { connect } from "react-redux";

const Popup = (props) => {
  const removeHandler = () => {
    console.log(props.currencyToRemove);
    props.updateFavorites(
      props.favorites.filter(
        (favorite) => favorite.code !== props.currencyToRemove
      )
    );

    props.updateCurrencies(
      props.favorites
        .filter((favorite) => favorite.code === props.currencyToRemove)
        .concat(props.currencies)
    );
    props.removeCurrency(null);
  };
  return (
    <div className="Popup">
      <div className="Title">
        Do you want to remove ALL currencies from favorites?
      </div>

      <Button type="Remove" clicked={removeHandler}>
        Remove
      </Button>
      <Button>Cancel</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
    favorites: state.favoriteCurrencies,
    currencyToRemove: state.currencyToRemove,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFavorites: (favorites) => dispatch(action.updateFavorites(favorites)),
    updateCurrencies: (currencies) =>
      dispatch(action.updateCurrencies(currencies)),
    removeCurrency: (currency) => dispatch(action.removeCurrency(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
