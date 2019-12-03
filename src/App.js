import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import * as fromDuck from "./configureStore/duck";

const App = ({
  exchangeRate,
  exchangeCurrency,
  baseCurrency,
  setBaseCurrency,
  setExchangeCurrency,
  setExchangeRate
}) => {
  // useEffect(() => {
  setBaseCurrency("USD");
  setExchangeCurrency("JPN");
  setExchangeRate(0.09);
  // }, []);

  return (
    <div>
      <div>
        <b>Exchange Rate</b>: {exchangeRate}
      </div>
      <div>
        <b>Exchange Currency</b>: {exchangeCurrency}
      </div>
      <div>
        <b>Base Currency</b>: {baseCurrency}
      </div>
    </div>
  );
};
App.propTypes = {
  exchangeRate: PropTypes.number,
  exchangeCurrency: PropTypes.string,
  baseCurrency: PropTypes.string,
  setBaseCurrency: PropTypes.func.isRequired,
  setExchangeCurrency: PropTypes.func.isRequired,
  setExchangeRate: PropTypes.func.isRequired
};
App.defaultProps = {
  exchangeRate: fromDuck.initialState.exchangeRate,
  exchangeCurrency: fromDuck.initialState.exchangeCurrency,
  baseCurrency: fromDuck.initialState.baseCurrency
};
export default connect(
  state => ({
    exchangeRate: fromDuck.selectExhangeRate(state),
    exchangeCurrency: fromDuck.selectExchangeCurrency(state),
    baseCurrency: fromDuck.selectBaseCurrency(state)
  }),
  {
    setBaseCurrency: fromDuck.setBaseCurrency,
    setExchangeCurrency: fromDuck.setExchangeCurrency,
    setExchangeRate: fromDuck.setExchangeRate
  }
)(App);
