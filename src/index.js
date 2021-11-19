import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import Countdown from "../src/Pages/Countdown.js";


ReactGA.initialize("G-EHGV57V8CX", {
    gaOptions: {
      // this option ensures 100% of site visits are logged for analytics
      siteSpeedSampleRate: 100
    }
  });

ReactDOM.render(
    <React.StrictMode>
        <Countdown/>
    </React.StrictMode>,
    document.getElementById("root"));