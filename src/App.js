import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import * as fromDuck from "./configureStore/duck";

const App = ({ exchangeRate, exchangeCurrency, baseCurrency }) => {
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
  baseCurrency: PropTypes.string
};
App.defaultProps = {
  exchangeRate: null,
  exchangeCurrency: null,
  baseCurrency: null
};
export default connect(state => ({
  exchangeRate: fromDuck.selectExhangeRate(state),
  exchangeCurrency: fromDuck.selectExchangeCurrency(state),
  baseCurrency: fromDuck.selectBaseCurrency(state)
}))(App);
