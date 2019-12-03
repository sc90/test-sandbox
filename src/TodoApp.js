import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import * as fromDuck from "./configureStore/duck";

function TodoApp({ exchangeRate, exchangeCurrency, baseCurrency }) {
  return (
    <div>
      <div>
        <b>exchangeRate</b>: {exchangeRate}
      </div>
      <div>
        <b>exchangeCurrency</b>: {exchangeCurrency}
      </div>
      <div>
        <b>baseCurrency</b>: {baseCurrency}
      </div>
    </div>
  );
}
TodoApp.propTypes = {
  exchangeRate: PropTypes.number,
  exchangeCurrency: PropTypes.string,
  baseCurrency: PropTypes.string
};
TodoApp.defaultProps = {
  exchangeRate: null,
  exchangeCurrency: null,
  baseCurrency: null
};
export default connect(state => ({
  exchangeRate: fromDuck.selectExhangeRate(state),
  exchangeCurrency: fromDuck.selectExchangeCurrency(state),
  baseCurrency: fromDuck.selectBaseCurrency(state)
}))(TodoApp);
