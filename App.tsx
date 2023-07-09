/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import HomeScreen from './src/screens/Home';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
        <HomeScreen/>
    </Provider>
  );
}


export default App;
