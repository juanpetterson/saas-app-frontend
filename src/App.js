import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes />
        <ReduxToastr />
        <GlobalStyle />
      </Fragment>
    </Provider>
  );
}

export default App;
