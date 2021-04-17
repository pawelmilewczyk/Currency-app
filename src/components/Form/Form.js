import { useEffect } from "react";
import "./Form.scss";
import Button from "../../shared/Button/Button";
import { connect } from "react-redux";
import * as action from "../../store/actions";

const Form = (props) => {
  useEffect(() => {
    props.getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className="Form">
      <h1 className="Title">Choose your favorites currencies</h1>
      <select>
        <option>SELECT</option>
        {props.currencies.map((currency) => (
          <option value={currency.code} key={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
      <Button type={"Submit"}>Add</Button>
      <Button type={"Remove"}>Remove all</Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(action.getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
