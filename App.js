import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import store from './app/store/configureStore';
import Main from './app/Main';
import './app/services/socket';
import { Logs } from 'expo';

Logs.enableExpoCliLogging();
window.store = store;
export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}
