import * as actionTypes from "./actionTypes";

const InitialState = {
  currencies: [],
  currencyToAdd: null,
  favoriteCurrencies: [],
  currencyToRemove: null,
  removeAllFavorites: false,
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
    case actionTypes.UPDATE_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies,
      };

    case actionTypes.REMOVE_CURRENCY:
      return {
        ...state,
        currencyToRemove: action.currencyToRemove,
      };

    case actionTypes.UPDATE_FAVORITES:
      return {
        ...state,
        favoriteCurrencies: action.favorites,
        removeAllFavorites: false,
      };

    case actionTypes.REMOVE_ALL_FAVORITES:
      return {
        ...state,
        removeAllFavorites: true,
      };

    default:
      return state;
  }
};

export default reducer;
