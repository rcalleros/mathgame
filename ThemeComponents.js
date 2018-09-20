import React from 'react';
import {StyleSheet,Text, TextInput } from 'react-native';

class ThemeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleInput = this.handleInput.bind(this);

      }
      handleInput = (text) =>{
        this.props.handleInput(text)
        this.setState({text:text})
      }
    render=()=>{
     return (
         <TextInput
         autoCapitalize="words"
         underlineColorAndroid='transparent' //removes android underline
         style={styles.input}
         placeholder="Name"
         onChangeText={(text) => this.handleInput(text)}
         value={this.state.text}
       />
     )
    }
    }
    const styles = StyleSheet.create({
        input: {
         backgroundColor: 'rgba(255, 255, 255,0)',
         color: '#1a96b7',
         borderBottomColor: '#1a96b7',
         borderBottomWidth: 1,
         borderStyle: 'solid',
         width:'80%',
         padding:5,
         marginBottom:20
        }       
      });
        export {ThemeInput};