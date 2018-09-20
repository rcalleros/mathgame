import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Welcome home, "+ navigation.getParam('name', 'Buddy!')
    };
  };
    render() {
      const { navigation } = this.props;
      return (
        <View>
          <Text>This is home.</Text>
        </View>
      );
    }
  }
    export default HomeScreen