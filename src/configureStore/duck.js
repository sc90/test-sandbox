import { defineAction } from "redux-define";
import { createAction, handleActions } from "redux-actions";

export const initialState = {
  exchangeRate: 3.06,
  baseCurrency: "SGD",
  exchangeCurrency: "MYR",
  amountToConvert: 0.0,
  currencyResponse: ""
};

//Action-types
export const SET_EXCHANGE_RATE = defineAction("SET_EXCHANGE_RATE");
export const SET_BASE_CURRENCY = defineAction("SET_BASE_CURRENCY");
export const SET_EXCHANGE_CURRENCY = defineAction("SET_EXCHANGE_CURRENCY");
export const SET_AMOUNT_TO_CONVERT = defineAction("SET_AMOUNT_TO_CONVERT");
export const SET_CURRENCY_REPONSE = defineAction("SET_CURRENCY_REPONSE");

//Action-creators
export const setExchangeRate = createAction(
  SET_EXCHANGE_RATE,
  params => params
);
export const setExchangeCurrency = createAction(
  SET_EXCHANGE_CURRENCY,
  params => params
);
export const setBaseCurrency = createAction(
  SET_BASE_CURRENCY,
  params => params
);
export const setAmountToConvert = createAction(
  SET_BASE_CURRENCY,
  params => params
);
export const setCurrencyResponse = createAction(
  SET_CURRENCY_REPONSE,
  params => params
);

//reducer
const reducer = handleActions(
  {
    [setExchangeRate]: (state, { payload }) => ({
      ...state,
      exchangeRate: payload
    }),
    [setExchangeCurrency]: (state, { payload }) => ({
      ...state,
      exchangeCurrency: payload
    }),
    [setBaseCurrency]: (state, { payload }) => ({
      ...state,
      baseCurrency: payload
    }),
    [setAmountToConvert]: (state, { payload }) => ({
      ...state,
      amountToConvert: payload
    }),
    [setCurrencyResponse]: (state, { payload }) => ({
      ...state,
      currencyResponse: payload
    })
  },
  initialState
);
export default reducer;

//Selector
export const selectExhangeRate = state => state.reducer.exchangeRate;
export const selectExchangeCurrency = state => state.reducer.exchangeCurrency;
export const selectBaseCurrency = state => state.reducer.baseCurrency;
export const selectAmountToConvert = state => state.reducer.amountToConvert;
