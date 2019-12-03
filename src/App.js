import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import * as fromDuck from "./configureStore/duck";

const App = ({
  exchangeRate,
  exchangeCurrency,
  baseCurrency,
  setBaseCurrency,
  setExchangeCurrency,
  setExchangeRate,
  dispatch
}) => {
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
      <button onClick={() => dispatch(setBaseCurrency("USD"))}>
        Change Currency Value
      </button>
    </div>
  );
};
App.propTypes = {
  exchangeRate: PropTypes.number,
  exchangeCurrency: PropTypes.string,
  baseCurrency: PropTypes.string,
  setBaseCurrency: PropTypes.func.isRequired,
  setExchangeCurrency: PropTypes.func.isRequired,
  setExchangeRate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};
App.defaultProps = {
  exchangeRate: fromDuck.initialState.exchangeRate,
  exchangeCurrency: fromDuck.initialState.exchangeCurrency,
  baseCurrency: fromDuck.initialState.baseCurrency
};

//https://github.com/larkintuckerllc/hello-redux-actions/blob/master/async/src/components/App.jsx
// const mapDispatchToProps = dispatch =>({
//    return {

//    }
// });

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
