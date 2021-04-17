import "./Favorites.scss";
import Favorite from "./Favorite";

const Favorites = (props) => {
  return (
    <div className="Favorites">
      <div className="Titles grid">
        <h5>Currency</h5>
        <h5>Bid</h5>
        <h5>Ask</h5>
      </div>
      <Favorite />
    </div>
  );
};

export default Favorites;
