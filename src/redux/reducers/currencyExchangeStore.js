import {
  SET_EXCHANGE_RATE,
  SET_BASE_CURRENCY,
  SET_EXCHANGE_CURRENCY
} from "../actionTypes";

const initialState = {
  exchangeRate: "3.06",
  baseCurrency: "SGD",
  exchangeCurrency: "MYR"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXCHANGE_RATE: {
      const { exchangeRate } = action.payload;
      return {
        ...state,
        exchangeRate: [...state.exchangeRate, exchangeRate]
      };
    }
    case SET_BASE_CURRENCY: {
      const { baseCurrency } = action.payload;
      return {
        ...state,
        baseCurrency: [...state.baseCurrency, baseCurrency]
      };
    }
    case SET_EXCHANGE_CURRENCY: {
      const { exchangeCurrency } = action.payload;
      return {
        ...state,
        exchangeCurrency: [...state.exchangeCurrency, exchangeCurrency]
      };
    }
    default:
      return state;
  }
}
