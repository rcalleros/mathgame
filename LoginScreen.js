import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {ThemeInput} from './ThemeComponents';

class LoginScreen extends React.Component {
// static navigationOptions = {
//   title: 'Welcome',
// };
  constructor(props) {
    super(props);
    //       this.RenderBtn = this.RenderBtn.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.state ={ 
      userName:'',
      isNameEmpty:true
    } ;
  }
handleNameInput = (text) =>{
  this.setState({
    userName: text,
    isNameEmpty: text.length !=0 ? false:true
  });
}

render() {
  const { navigate } = this.props.navigation;
  //show button if input is not empty
  const  ContinueBtn = ({userName})=>{
    return(
      <Button
        style={styles.button}
        title={'continue '+ userName}
        color="#1a96b7"
        onPress={() =>
          navigate('TargetSum', { name: userName, randomNumberCount:6 })
        }
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Please enter your name</Text>
      <ThemeInput
        //onSubmitEditing={}
        handleInput={this.handleNameInput}
      />
      {this.state.isNameEmpty ? <Text/>: <ContinueBtn userName={this.state.userName} />}
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(29, 36, 55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText:{
    fontSize:35,
    textAlign:'center',
    color:'#fff'
  }
});

export default LoginScreen;