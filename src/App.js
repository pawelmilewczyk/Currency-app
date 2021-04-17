import "./App.scss";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Form />
      {props.favorites.length > 0 ? <Favorites /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteCurrencies,
  };
};

export default connect(mapStateToProps)(App);
