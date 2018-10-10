//import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import { displayName as appName } from './app.json';
import Header from './src/components/header';


//create a component
const App = () => (
    <Header headerText={appName} />
);


//render it to the device
AppRegistry.registerComponent('albums', () => App);
