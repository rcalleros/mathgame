import React from 'react';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';
import PropTypes from  'prop-types';
class RandomNumber extends React.Component {
  static propTypes ={
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired
  }
handlePress= () =>{
  if(this.props.isDisabled){
    return;
  }
  this.props.onPress(this.props.id);
}
render() {
  return (
    <TouchableOpacity onPress={this.handlePress} style={styles.buttonContainer}>
      <Text style={[styles.randomNumbers,this.props.isDisabled && styles.disabled]} >{this.props.number}</Text>
    </TouchableOpacity>
  );
}
}
const styles = StyleSheet.create({
  buttonContainer:{
    flexBasis:'50%',
    width:'50%',
    borderWidth: 1,
    borderStyle:'solid',
    borderColor:'#12C487'
  },
  randomNumbers:{
    fontSize:30,
    textAlign:'center',
    color: '#1a96b7',
    paddingVertical:30
  },
  disabled:{
    color:'#fff',
    backgroundColor:'#1375CE',
    opacity:.3
  }
});
export default RandomNumber;