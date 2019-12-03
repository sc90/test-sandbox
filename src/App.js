import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectBaseCurrency,
  selectExchangeCurrency,
  selectExhangeRate,
  setBaseCurrency, //calling this action
  // setExchangeCurrency,
  // setExchangeRate,
  // initialState
} from "./configureStore/duck";

const App = props => {
  const { 
    exchangeRate, 
    exchangeCurrency, 
    baseCurrency, 
    setBaseCurrency 
  } = props;

  const changeBase = () => {
    setBaseCurrency("USD");
  }

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
      <button onClick={() => changeBase() }>Change Currency Value</button>
    </div>
  );
};
App.propTypes = {
  exchangeRate: PropTypes.number,
  exchangeCurrency: PropTypes.string,
  baseCurrency: PropTypes.string,
  setBaseCurrency: PropTypes.func.isRequired
  // setExchangeCurrency: PropTypes.func.isRequired,
  // setExchangeRate: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired
};
App.defaultProps = {
  currentState: {},
  exchangeRate: "",
  exchangeCurrency: "",
  baseCurrency: ""
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      setBaseCurrency
    },
    dispatch,
  )
});

const mapStateToProps = (state) => {
  return {
    exchangeRate: selectExhangeRate(state),
    exchangeCurrency: selectExchangeCurrency(state),
    baseCurrency: selectBaseCurrency(state), 
  }
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(App);
