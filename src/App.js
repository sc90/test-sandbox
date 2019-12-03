import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  selectBaseCurrency,
  selectExchangeCurrency,
  selectExhangeRate,
  setBaseCurrency, 
  // setExchangeCurrency, 
  // setExchangeRate, 
  initialState,
} from "./configureStore/duck";

const App = ({
  exchangeRate,
  exchangeCurrency,
  baseCurrency,
  onClick
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
      <button onClick={() => onClick("USD")}>
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
  // setExchangeCurrency: PropTypes.func.isRequired,
  // setExchangeRate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};
App.defaultProps = {
  exchangeRate: initialState.exchangeRate,
  exchangeCurrency: initialState.exchangeCurrency,
  baseCurrency: initialState.baseCurrency
};

const mapDispatchToProps = (dispatch,ownProps)=> ({
  onClick: () => dispatch(setBaseCurrency(ownProps.baseCurrency)),
  // on: setExchangeCurrency,
  // setExchangeRate: setExchangeRate
});

export default connect(
  state => ({
    exchangeRate: selectExhangeRate(state),
    exchangeCurrency: selectExchangeCurrency(state),
    baseCurrency: selectBaseCurrency(state)
  }), mapDispatchToProps

)(App);
