import { connect } from "react-redux";
import Button from "../../shared/Button/Button";

const Favorite = (props) => {
  return props.favorites.map((favorite) => (
    <div className="grid" key={favorite.code}>
      <div>{favorite.code}</div>
      <div>{favorite.bid}</div>
      <div>{favorite.ask}</div>
      <Button type="Remove">Remove</Button>
    </div>
  ));
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteCurrencies,
  };
};

export default connect(mapStateToProps)(Favorite);
