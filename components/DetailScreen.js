import React from 'react';
import { StyleSheet, Text, ListView, ScrollView, View,TouchableHighlight } from 'react-native';
import Constants from '../lib/Constants';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
	    var item = navigation.state.params.item;
		return {
			title : item.title
		}
  }
  constructor(props) {
	  super(props);
	 
  }
  componentWillMount() {
       
    }
	
	componentDidMount() {
		
	}
  onOpenLink = (item) => {
        //this.props.navigator.push({name: 'web_page', url: url});
		console.log('onOpenLink : ' + item.content)
		
    }
  render() {
	const item = this.props.navigation.state.params.item;
    return (
	  <View style={styles.container}>
		  <Text style={styles.title}>{item.title}</Text>
		  <TouchableHighlight onPress={this.onOpenLink.bind(this, item)} underlayColor={"#E8E8E8"} style={styles.button}>
            <View>
                <Text>OPEN LINK</Text>
            </View>
            </TouchableHighlight>
		  <Text style={styles.body}>{item.description}</Text>
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
  ,
  title: {
	  color:'#000000',
	  position: 'absolute',
      top: 0,
	  alignItems:'center',
	  fontSize:20
  },
  description: {
	  color:'#00ff00',
	  margin:5
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
	paddingTop:10
  },
});
