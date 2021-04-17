import * as actionTypes from "./actionTypes";

const InitialState = {
  currencies: [],
  currencyToAdd: null,
  favoriteCurrencies: [],
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

    case actionTypes.ADD_CURRENCY:
      return {
        ...state,
        favoriteCurrencies: state.favoriteCurrencies.concat(
          action.favoriteCurrency
        ),
      };

    default:
      return state;
  }
};

export default reducer;
