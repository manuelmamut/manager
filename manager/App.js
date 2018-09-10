import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Router from './src/router';


export default class App extends React.Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBARbtXj6e73vhVKpL-W3h7QtJ_g7VOlnY",
      authDomain: "manager-c0f92.firebaseapp.com",
      databaseURL: "https://manager-c0f92.firebaseio.com",
      projectId: "manager-c0f92",
      storageBucket: "manager-c0f92.appspot.com",
      messagingSenderId: "166492174059"
    };
    firebase.initializeApp(config);
  
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
