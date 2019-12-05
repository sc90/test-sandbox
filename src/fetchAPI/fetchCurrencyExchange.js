import {
  fetchApiPending,
  fetchApiSuccess,
  fetchApiError
} from "../configureStore/action";

export function fetchCurrencyExchange(url) {
  return dispatch => {
    dispatch(fetchApiPending());
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchApiSuccess(res.rates));
        return res;
      })
      .catch(error => {
        dispatch(fetchApiError(error));
      });
  };
}
