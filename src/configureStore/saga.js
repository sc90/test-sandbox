import { put, all } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import {
  SET_BASE_CURRENCY,
  SET_CURRENCY_REPONSE,
  setBaseCurrency
} from "./duck";
function* fetchCurrencyExchangeRate(action) {
  const json = yield fetch(
    "https://api.exchangeratesapi.io/latest?base=USD"
  ).then(response => response.json());
  yield put({ type: SET_CURRENCY_REPONSE, json: JSON.stringify(json) });
}
function* actionWatcher() {
  console.log("called");
  yield takeLatest(
    [
      // "SET_EXCHANGE_RATE",
      setBaseCurrency
      // "SET_EXCHANGE_CURRENCY",
      // "SET_AMOUNT_TO_CONVERT"
    ],
    fetchCurrencyExchangeRate
  );
}
export default function* rootSaga() {
  yield all(actionWatcher());
  // yield all([
  //   yield takeLatest(SET_BASE_CURRENCY, fetchCurrencyExchangeRate)
  //   // yield takeLatest(CREATE_TODOS, createTodos);
  // ]);
}
