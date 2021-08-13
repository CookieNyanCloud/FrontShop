import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';


ReactDOM.render(
//   <DataProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,
//   </DataProvider>,
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));






// reportWebVitals();
