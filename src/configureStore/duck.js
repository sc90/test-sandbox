import { defineAction } from "redux-define";
import { createAction, handleActions } from "redux-actions";

export const initialState = {
  exchangeRate: 3.06,
  baseCurrency: "SGD",
  exchangeCurrency: "MYR"
};

//Action-types
export const SET_EXCHANGE_RATE = defineAction("SET_EXCHANGE_RATE");
export const SET_BASE_CURRENCY = defineAction("SET_BASE_CURRENCY");
export const SET_EXCHANGE_CURRENCY = defineAction("SET_EXCHANGE_CURRENCY");

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

//reducer
const reducer = handleActions(
  {
    [setExchangeRate]: (state, { exchangeRate }) => ({
      ...state,
      exchangeRate
    }),
    [setExchangeCurrency]: (state, { exchangeCurrency }) => ({
      ...state,
      exchangeCurrency
    }),
    [setBaseCurrency]: (state, { baseCurrency }) => ({
      ...state,
      baseCurrency
    })
  },
  initialState
);
export default reducer;

//Selector
export const selectExhangeRate = state => state.exchangeRate;
export const selectExchangeCurrency = state => state.exchangeCurrency;
export const selectBaseCurrency = state => state.baseCurrency;
