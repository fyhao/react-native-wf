import React from 'react';
import { StyleSheet, Text, ListView, ScrollView, View,TouchableHighlight } from 'react-native';
import Constants from '../lib/Constants';
import {
  StackNavigator,
} from 'react-navigation';
import DetailScreen from './DetailScreen';
import WebViewOpenLinkScreen from './WebViewOpenLinkScreen';
class MasterDetail extends React.Component {
  static navigationOptions = {
    title: 'MasterDetail'
  };
  constructor(props) {
	  super(props);
	  this.renderItem = this.renderItem.bind(this);
  }
  componentWillMount() {
        this.setState({
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          news: {},
          loaded: false
        
		});
		
		
    }
	
	componentDidMount() {
		fetch(Constants.API_URL, {
		  method: 'GET',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  }
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				loaded : true,
				dataSource : this.state.dataSource.cloneWithRows(responseJson.list)
			});
			console.log('after loaded')
		});
	}
  
  render() {
    return (
	  <View style={styles.container}>
		  {
			  !this.state.loaded && 
			  <Text>Loading...</Text>
		  }
		  <ScrollView ref="scrollView">
		  {
			  this.state.loaded && 
			  <ListView initialListSize={1} dataSource={this.state.dataSource} style={styles.news} renderRow={this.renderItem}></ListView>
		  }
			
		  </ScrollView>
	  </View>
    );
  }
  
  
	viewPage = (item) => {
        //this.props.navigator.push({name: 'web_page', url: url});
		console.log('viewPage : ' + item.title)
		this.props.navigation.navigate('Detail', {item:item})
    }
	
	
  renderItem(item) {
        return (
            <TouchableHighlight onPress={this.viewPage.bind(this, item)} underlayColor={"#E8E8E8"} style={styles.button}>
            <View style={styles.news_item}>
                <Text style={styles.news_item_text}>{item.title}</Text>
            </View>
            </TouchableHighlight>
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
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
 
  news_item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5
  },
  news_item_text: {
    color: '#575757',
    fontSize: 18
  }
});

export default StackNavigator({
  Home: {
    screen: MasterDetail,
  },
  Detail: {
    screen: DetailScreen,
  },
  WebViewOpenLink: {
	  screen:WebViewOpenLinkScreen
  }
});