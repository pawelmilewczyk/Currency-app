import "./App.scss";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Popup from "./components/Popup/Popup";
import Aux from "./hoc/Aux";
import { connect } from "react-redux";

function App(props) {
  const classes = props.currencyToRemove ? "App Blur" : "App";
  return (
    <Aux>
      <div className={classes}>
        <Form />
        {props.favorites.length ? <Favorites /> : null}
      </div>
      {props.currencyToRemove ? <Popup /> : null}
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteCurrencies,
    currencyToRemove: state.currencyToRemove,
  };
};

export default connect(mapStateToProps)(App);
