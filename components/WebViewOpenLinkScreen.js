import React from 'react';
import { StyleSheet, WebView, View, ActivityIndicator, Dimensions} from 'react-native';
import Constants from '../lib/Constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class WebViewOpenLinkScreen extends React.Component {
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
  
  onLoad() {
	  console.log('webview onload')
  }
  
  renderLoading() {
    
    return (
 
      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  render() {
	const item = this.props.navigation.state.params.item;
    return (
	  <View style={styles.container}>
	  <WebView 
		style={styles.WebViewStyle}
		ref={(ref) => { this.webview = ref; }}
		source={{uri:item.content}} 
		javaScriptEnabled={true}
		domStorageEnabled={true}
		onLoad={this.onLoad}
		renderLoading={this.renderLoading}
		startInLoadingState={true}
		/>
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
  WebViewStyle:
	{
	   justifyContent: 'center',
	   alignItems: 'center',
	   flex:1,
	   marginTop: 0,
	   width: deviceWidth,
       height: deviceHeight
	},
	
	ActivityIndicatorStyle:{
		marginTop: 20
	}
});
