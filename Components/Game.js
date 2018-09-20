import React from 'react';
import RandomNumber from './RandomNumber';
import { StyleSheet, Text, View,Button} from 'react-native';
import PropTypes from  'prop-types';
import shuffle from 'lodash.shuffle';
class Game extends React.Component {
  static propTypes ={
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired
  }
  constructor(props){
    super(props);
    this.gameStatus = 'PLAYING';

  }
  state = {
    selectedIds: [],
    remainingSeconds:this.props.initialSeconds,
    gameStatus: 'PLAYING'
  }
  randomNumbers = Array
    .from({length:this.props.randomNumberCount})
    .map(()=>1+ Math.floor(10*Math.random()));

  target = this.randomNumbers
    .slice(0,this.props.randomNumberCount - 2)
    .reduce((acc,curr)=>acc+ curr,0);
  
  shuffledRandomNumbers = shuffle(this.randomNumbers);

  componentDidUpdate(prevProps,prevState){
       
    if(prevState.selectedIds !==this.state.selectedIds ){
      this.setState({
        gameStatus:this.calcGameStatus()
      });
    }

  }

  componentDidMount(){
    this.intervalID = setInterval(()=>{
      this.setState((prevState)=>({
        remainingSeconds: prevState.remainingSeconds - 1
      }),()=>{
        if(this.state.remainingSeconds === 0){
          if(this.state.gameStatus != 'WON'){
            this.setState({gameStatus:'LOST'});
          }
          clearInterval(this.intervalID);

        }
      });
    },1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
   isNumberSelected = (index) =>{
     return this.state.selectedIds.indexOf(index) >= 0;
   }
   selectNumber =(index)=>{
     this.setState((prevState)=>({
       selectedIds:[...prevState.selectedIds,index]
     }));
   }  
   calcGameStatus=()=>{
     const sumSelected = this.state.selectedIds.reduce((acc,curr)=>{
       return acc + this.shuffledRandomNumbers[curr];
     },0);
     if(this.state.remainingSeconds===0){
       return 'LOST';
     }
     if(sumSelected<this.target){
       return 'PLAYING'; 
     }
     if(sumSelected===this.target){
       return 'WON'; 
     }
     if(sumSelected > this.target){
       return 'LOST'; 
     }
     

   }
   render() {
     console.log(this.state.gameStatus);
     return (
       <View style={styles.container}>
         <Text style={[styles.target,styles[`STATUS_${this.state.gameStatus}`]]}>{this.target}</Text>
         {this.shuffledRandomNumbers.map((randomNumber,index)=>
           <RandomNumber 
             key={index} 
             id={index} 
             number={randomNumber} 
             isDisabled={this.isNumberSelected(index) || this.state.gameStatus !== 'PLAYING'}
             onPress={this.selectNumber}
           />
           
         )}
         {
           (this.state.gameStatus !='PLAYING')?
             <Button title="PLAY AGAIN" onPress={this.props.onPlayAgain} />
             :
             <Text style={styles.timer}>{this.state.remainingSeconds}</Text>
         }
       </View>
     );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(29, 36, 55)',
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%'
  },
  target:{
    fontSize:45,
    textAlign:'center',
    color:'#fff',
    paddingTop:30,
    width:'100%'

  },
  timer:{
    fontSize: 45,
    color:'red'
  },
  STATUS_WON:{
    backgroundColor:'green'
  },
  STATUS_LOST:{
    backgroundColor:'red'
  },
});
export default Game;