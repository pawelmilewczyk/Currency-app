import "./App.scss";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Popup from "./components/Popup/Popup";
import Aux from "./hoc/Aux";
import { connect } from "react-redux";

function App(props) {
  return (
    <Aux>
      <div className="App">
        <Form />
        {props.favorites.length > 0 ? <Favorites /> : null}
      </div>
      {/* <Popup /> */}
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteCurrencies,
  };
};

export default connect(mapStateToProps)(App);
