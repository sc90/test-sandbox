export const FETCH_API_PENDING = "FETCH_API_PENDING";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_ERROR = "FETCH_API_ERROR";
export const SET_BASE_CURRENCY = "SET_BASE_CURRENCY";
export const SET_EXCHANGE_CURRENCY = "SET_EXCHANGE_CURRENCY";
export const SET_AMOUNT_TO_CONVERT = "SET_AMOUNT_TO_CONVERT";

export function fetchApiPending() {
  return {
    type: FETCH_API_PENDING
  };
}

export function fetchApiSuccess(res) {
  return {
    type: FETCH_API_SUCCESS,
    response: res
  };
}

export function fetchApiError(error) {
  return {
    type: FETCH_API_ERROR,
    error
  };
}

export function setExchangeCurrency(exchangeCurrency) {
  return {
    type: SET_EXCHANGE_CURRENCY,
    exchangeCurrency
  };
}

export function setBaseCurrency(baseCurrency) {
  return {
    type: SET_BASE_CURRENCY,
    baseCurrency
  };
}

export function setAmountToConvert(amountToConvert) {
  return {
    type: SET_AMOUNT_TO_CONVERT,
    amountToConvert
  };
}
