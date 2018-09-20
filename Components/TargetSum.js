import React from 'react';
import { StyleSheet, View} from 'react-native';
import Game from './Game';
class TargetSum extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sum must equal target, '+ navigation.getParam('name', 'Buddy!')
    };
  };
  state={
    gameID: 1
  }
  resetGame = () =>{
    this.setState((prevState)=>({
      gameID: prevState.gameID +1
    }));
  }
  render() {
    return (
      <View style={styles.container}>
        <Game
          key={this.state.gameID}
          onPlayAgain={this.resetGame}
          randomNumberCount={6}
          initialSeconds={10} 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(29, 36, 55)'
  }
});
export default TargetSum;