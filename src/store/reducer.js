import * as actionTypes from "./actionTypes";

const InitialState = {
  currencies: [],
  currencyToAdd: null,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        currencies: state.currencies.concat(action.currencies),
      };

    case actionTypes.SELECT_CURRENCY:
      return {
        ...state,
        currencyToAdd: action.selectedCurrency,
      };

    default:
      return state;
  }
};

export default reducer;
