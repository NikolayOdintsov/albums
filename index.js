//import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { displayName as appName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//create a component
const App = () => (
    //flex:1 - is a trick to expand all content to the device size
    <View style={{ flex: 1 }}>
        <Header headerText={appName} />
        <AlbumList/>
    </View>
);


//render it to the device
AppRegistry.registerComponent('albums', () => App);
