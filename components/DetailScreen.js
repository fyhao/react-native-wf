import React from 'react';
import { StyleSheet, Text, ListView, ScrollView, View,TouchableHighlight } from 'react-native';
import Constants from '../lib/Constants';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'DetailScreen'
  };
  constructor(props) {
	  super(props);
	 
  }
  componentWillMount() {
       
    }
	
	componentDidMount() {
		
	}
  
  render() {
	const item = this.props.navigation.state.params.item;
    return (
	  <View style={styles.container}>
		  <Text>{item.title}</Text>
		  <Text>{item.description}</Text>
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
  }
});
