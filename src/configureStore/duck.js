import { defineAction } from "redux-define";
import { createAction, handleActions } from "redux-actions";

export const initialState = {
  exchangeRate: 3.06,
  baseCurrency: "SGD",
  exchangeCurrency: "MYR",
  fetch:false,
};

//Action-types
export const SET_EXCHANGE_RATE = defineAction("SET_EXCHANGE_RATE");
export const SET_BASE_CURRENCY = defineAction("SET_BASE_CURRENCY");
export const SET_EXCHANGE_CURRENCY = defineAction("SET_EXCHANGE_CURRENCY");
export const GET_TRANSACTION = defineAction("GET_TRANSACTION");

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
export const getTransaction = createAction(
  GET_TRANSACTION,
  params => params
);


//reducer
const reducer = handleActions(
  {
    [setExchangeRate]: (state, { payload }) => ({
      ...state,
      exchangeRate:payload
    }),
    [setExchangeCurrency]: (state, { payload }) => ({
      ...state,
      exchangeCurrency:payload
    }),
    [setBaseCurrency]: (state, { payload }) => ({
      ...state,
      baseCurrency: payload
    }),
    [getTransaction]: (state, { fetch }) => ({
      ...state,
      fetch
    })
  },
  initialState
);
export default reducer;

//Selector
export const selectExhangeRate = state => state.reducer.exchangeRate;
export const selectExchangeCurrency = state => state.reducer.exchangeCurrency;
export const selectBaseCurrency = state => state.reducer.baseCurrency;
