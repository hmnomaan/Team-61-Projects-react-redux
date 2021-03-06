import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>

  ),
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
