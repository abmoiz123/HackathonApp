/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import configstore from './src/Store/index'

const store = configstore();
const Reduxcon = () =>
    <StoreProvider store={store}>
        <PaperProvider>
            <App />
        </PaperProvider>
    </StoreProvider>

AppRegistry.registerComponent(appName, () => Reduxcon);
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
