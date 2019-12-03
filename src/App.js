import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
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

  console.log(props);
  
  const changeBase = () => {
    console.log("I got triggered");
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
  currentState: PropTypes.object,
  setBaseCurrency: PropTypes.func.isRequired
  // setExchangeCurrency: PropTypes.func.isRequired,
  // setExchangeRate: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired
};
App.defaultProps = {
  // exchangeRate: initialState.exchangeRate,
  // exchangeCurrency: initialState.exchangeCurrency,
  // baseCurrency: initialState.baseCurrency,
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
  // onClick: () => dispatch(setBaseCurrency(ownProps.baseCurrency))
  // on: setExchangeCurrency,
  // setExchangeRate: setExchangeRate
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    exchangeRate: selectExhangeRate(state),
    exchangeCurrency: selectExchangeCurrency(state),
    baseCurrency: selectBaseCurrency(state), 
    currentState: state   
  }
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(App);
