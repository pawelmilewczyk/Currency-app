import * as actionTypes from "./actionTypes";

const InitialState = {
  currencies: [],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        currencies: state.currencies.concat(action.currencies),
      };

    default:
      return state;
  }
};

export default reducer;
