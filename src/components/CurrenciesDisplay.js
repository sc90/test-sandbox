import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addBaseCurrency, addExchangeCurrency } from "../redux/actions";
import { getExchangeCurrency } from "../redux/selectors";

const CurrenciesDisplay = () => {
  useEffect(() => {
    // Update the document title using the browser API
    addBaseCurrency("USD");
    addExchangeCurrency("YEN");
  }, []);

  const exchangeCurrency = getExchangeCurrency();
  return (
    <div className="currencies-display-item">
      <span className="base-currency-display">{{ exchangeCurrency }}</span>
    </div>
  );
};

// export default Todo;
export default connect(
  null,
  {
    addExchangeCurrency,
    addBaseCurrency
  }
)(CurrenciesDisplay);
