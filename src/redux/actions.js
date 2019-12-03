import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_EXCHANGE_CURRENCY,
  SET_BASE_CURRENCY,
  SET_EXCHANGE_RATE
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const addExchangeRate = exchangeRate => ({
  type: SET_EXCHANGE_RATE,
  payload: { exchangeRate }
});

export const addExchangeCurrency = exchangeCurrency => ({
  type: SET_EXCHANGE_CURRENCY,
  payload: { exchangeCurrency }
});

export const addBaseCurrency = baseCurrency => ({
  type: SET_BASE_CURRENCY,
  payload: { baseCurrency }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
