import {
  FETCH_API_PENDING,
  FETCH_API_SUCCESS,
  FETCH_API_ERROR,
  SET_AMOUNT_TO_CONVERT,
  SET_BASE_CURRENCY,
  SET_EXCHANGE_CURRENCY
} from "./action";

export const initialState = {
  exchangeRate: {},
  baseCurrency: "SGD",
  exchangeCurrency: "SGD",
  amountToConvert: 0.0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_API_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        pending: false,
        exchangeRates: action.response
      };
    case FETCH_API_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case SET_AMOUNT_TO_CONVERT:
      return {
        ...state,
        pending: false,
        amountToConvert: action.amountToConvert
      };
    case SET_BASE_CURRENCY:
      return {
        ...state,
        pending: false,
        baseCurrency: action.baseCurrency
      };
    case SET_EXCHANGE_CURRENCY:
      return {
        ...state,
        pending: false,
        exchangeCurrency: action.exchangeCurrency
      };
    default:
      return state;
  }
}

//Selector
export const selectExhangeRate = state => state.reducer.exchangeRates;
export const selectExchangeCurrency = state => state.reducer.exchangeCurrency;
export const selectBaseCurrency = state => state.reducer.baseCurrency;
export const selectAmountToConvert = state => state.reducer.amountToConvert;
