import axios from "axios";
import * as actionTypes from "./actionTypes";

const storeData = (data) => {
  return {
    type: actionTypes.GET_DATA,
    currencies: data,
  };
};

export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://api.nbp.pl/api/exchangerates/tables/c/?format=json")
      .then((res) => {
        let currencies = [];
        res.data[0].rates.map((currency) =>
          currencies.push({
            code: currency.code,
            bid: currency.bid,
            ask: currency.ask,
          })
        );
        dispatch(storeData(currencies));
      })
      .catch((err) => console.error(err));
  };
};