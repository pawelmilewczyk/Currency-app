import { connect } from "react-redux";
import Button from "../../shared/Button/Button";
import * as action from "../../store/actions";

const Favorite = (props) => {
  const removeHandler = (e) => {
    e.preventDefault();
    const currency = e.target.parentNode.firstChild.innerHTML;
    props.currencyToRemove(currency);
  };
  return props.favorites.map((favorite) => (
    <div className="grid" key={favorite.code}>
      <div>{favorite.code}</div>
      <div>{favorite.bid}</div>
      <div>{favorite.ask}</div>
      <Button type="Remove" clicked={removeHandler}>
        Remove
      </Button>
    </div>
  ));
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteCurrencies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currencyToRemove: (currency) => dispatch(action.removeCurrency(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
