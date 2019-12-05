import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectBaseCurrency,
  selectExchangeCurrency,
  selectExhangeRate,
  selectAmountToConvert
} from "./configureStore/reducer";
import {
  setBaseCurrency,
  setExchangeCurrency,
  setAmountToConvert
} from "./configureStore/action";
import { fetchCurrencyExchange } from "./fetchAPI/fetchCurrencyExchange";
import Dropdown from "./components/DropdownSemanticUI";
import InputField from "./components/InputFieldSemanticUI";

const App = props => {
  const {
    exchangeRates,
    setBaseCurrency,
    setExchangeCurrency,
    setAmountToConvert,
    amountToConvert,
    fetchCurrencyExchange,
    baseCurrency,
    exchangeCurrency
  } = props;

  useEffect(() => {
    fetchCurrencyExchange(
      "https://api.exchangeratesapi.io/latest?base=" + baseCurrency
    );
  }, [baseCurrency]);

  let rate = 0.0;
  if (exchangeRates != null) {
    rate = exchangeRates[exchangeCurrency];
  }

  return (
    <div>
      <Dropdown text="Select Base currency" onChange={setBaseCurrency} />
      <Dropdown
        text="Select currency to exchange"
        onChange={setExchangeCurrency}
      />
      <InputField onChange={setAmountToConvert} />
      <div>
        <b>Total Converted Amount</b>: {amountToConvert * rate}
      </div>
      <div>
        <b>Exchange Rate</b>: {rate}
      </div>
    </div>
  );
};
App.propTypes = {
  exchangeRates: PropTypes.object,
  exchangeCurrency: PropTypes.string,
  baseCurrency: PropTypes.string,
  setBaseCurrency: PropTypes.func,
  setExchangeCurrency: PropTypes.func,
  setAmountToConvert: PropTypes.func,
  fetchCurrencyExchange: PropTypes.func
};
App.defaultProps = {
  currentState: {},
  exchangeRates: null,
  exchangeCurrency: "",
  baseCurrency: ""
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      setBaseCurrency,
      setExchangeCurrency,
      setAmountToConvert,
      fetchCurrencyExchange
    },
    dispatch
  )
});

const mapStateToProps = state => {
  return {
    exchangeRates: selectExhangeRate(state),
    exchangeCurrency: selectExchangeCurrency(state),
    baseCurrency: selectBaseCurrency(state),
    amountToConvert: selectAmountToConvert(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
