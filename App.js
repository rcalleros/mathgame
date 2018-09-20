
import {createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import TargetSum from './Components/TargetSum';
const App = createStackNavigator({
  Login: { screen: LoginScreen },
  TargetSum: { screen: TargetSum },
  Home: { screen: HomeScreen },
});




export default App;

