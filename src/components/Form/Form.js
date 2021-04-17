import "./Form.scss";
import Button from "../../shared/Button/Button";

const Form = (props) => {
  return (
    <form>
      <h1>Choose your favorites currencies</h1>
      <select>
        <option>SELECT</option>
      </select>
      <Button type={"Submit"}>Add</Button>
      <Button type={"Remove"}>Remove all</Button>
    </form>
  );
};

export default Form;
