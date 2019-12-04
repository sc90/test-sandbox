import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectBaseCurrency,
  selectExchangeCurrency,
  selectExhangeRate,
  setBaseCurrency, //calling this action
  setExchangeCurrency,
  // setExchangeRate,
} from "./configureStore/duck";
import Dropdown from "./components/DropdownSemanticUI";

const App = props => {
  const {
    exchangeRate,
    exchangeCurrency,
    baseCurrency,
    setBaseCurrency,
    setExchangeCurrency,
  } = props;

  return (
    <div>
      <Dropdown text="Select Base currency" onChange={setBaseCurrency} />
      <Dropdown text="Select currency to exchange" onChange={setExchangeCurrency} />
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
  // setExchangeRate: PropTypes.func.isRequired,
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
      setBaseCurrency,
      setExchangeCurrency
    },
    dispatch
  )
});

const mapStateToProps = state => {
  return {
    exchangeRate: selectExhangeRate(state),
    exchangeCurrency: selectExchangeCurrency(state),
    baseCurrency: selectBaseCurrency(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
