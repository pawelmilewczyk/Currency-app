import "./Form.scss";
import Button from "../../shared/Button/Button";

const Form = (props) => {
  return (
    <form className="Form">
      <h1 className="Title">Choose your favorites currencies</h1>
      <select>
        <option>SELECT</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <Button type={"Submit"}>Add</Button>
      <Button type={"Remove"}>Remove all</Button>
    </form>
  );
};

export default Form;
