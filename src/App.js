/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import RX from 'reactxp';
import Analytics from 'mobile-center-analytics';
export default class App extends RX.Component  {
  constructor(){
    super();
    this.state={
      jokes:''
    }

  }
  trackEvent = (eventName, data='') => {
    Analytics.trackEvent(eventName,{jake:data})
  }
getJokes = () => {
  fetch('https://icanhazdadjoke.com/',{headers:{Accept:'text/plain'}}).then(res => res.text())
  .then(joke => this.setState({jokes:joke}),err=> this.setState({jokes:'could not get joke' + err}))
}

  render() {
    return (
      <RX.View style={styles.container}>
        <RX.Text style={styles.welcome}>
          Welcome to React Native!
        </RX.Text>
        <RX.Text style={styles.instructions}>
          {this.state.jokes}
        </RX.Text>
        <RX.Button onPress={()=>this.getJokes()}>
         <RX.Text style={styles.welcome}>Get Jokes </RX.Text>
        </RX.Button>
      </RX.View>
    );
  }
}

const styles = {
  container:RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }),
  welcome:RX.Styles.createViewStyle( {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }),
  instructions: RX.Styles.createViewStyle({
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }),
};
