import "./Popup.scss";
import Button from "../../shared/Button/Button";

const Popup = (props) => {
  return (
    <div className="Popup">
      <div className="Title">
        Do you want to remove ALL currencies from favorites?
      </div>

      <Button type="Remove">Remove</Button>
      <Button>Cancel</Button>
    </div>
  );
};

export default Popup;
