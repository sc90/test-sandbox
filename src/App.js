import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectBaseCurrency,
  selectExchangeCurrency,
  selectExhangeRate,
  setBaseCurrency,
  setExchangeCurrency,
  setAmountToConvert,
  selectAmountToConvert
} from "./configureStore/duck";
import Dropdown from "./components/DropdownSemanticUI";
import InputField from "./components/InputFieldSemanticUI";

const App = props => {
  const {
    exchangeRate,
    exchangeCurrency,
    baseCurrency,
    setBaseCurrency,
    setExchangeCurrency,
    setAmountToConvert,
    amountToConvert
  } = props;

  return (
    <div>
      <Dropdown text="Select Base currency" onChange={setBaseCurrency} />
      <Dropdown
        text="Select currency to exchange"
        onChange={setExchangeCurrency}
      />
      <InputField onChange={setAmountToConvert} />
      <div>
        <b>Total Converted Amount</b>: {amountToConvert * exchangeRate}
      </div>
      <div>
        <b>Exchange Rate</b>: {exchangeRate}
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
  setAmountToConvert: PropTypes.func.isRequired
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
      setExchangeCurrency,
      setAmountToConvert
    },
    dispatch
  )
});

const mapStateToProps = state => {
  return {
    exchangeRate: selectExhangeRate(state),
    exchangeCurrency: selectExchangeCurrency(state),
    baseCurrency: selectBaseCurrency(state),
    amountToConvert: selectAmountToConvert(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
