import { put, call } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import { SET_BASE_CURRENCY, SET_CURRENCY_REPONSE } from "./duck";
function* fetchCurrencyExchangeRate() {
  const response = yield call(
    fetch,
    "https://api.exchangeratesapi.io/latest?base=USD"
  );
  const data = yield call([response, "json"]);
  // const json = yield fetch(
  //   "https://api.exchangeratesapi.io/latest?base=USD"
  // ).then(response => response.json());
  yield put({ type: SET_CURRENCY_REPONSE, json: data });
}

export default function* rootSaga() {
  yield takeLatest([SET_BASE_CURRENCY], fetchCurrencyExchangeRate);
}
