import React from 'react';
import { StyleSheet, Text, ListView, View } from 'react-native';
import Constants from './lib/Constants';
var API_URL = Constants.API_URL;
export default class App extends React.Component {
  
  componentDidMount() {
        this.setState({
			
          title: 'HN Reader',
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          news: {},
          loaded: false
        
		})   
    }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
		<Text>API URL: {API_URL}</Text>
      </View>
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
