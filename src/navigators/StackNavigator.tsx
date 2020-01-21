import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Stack1Screen from '../screens/Stack1Screen'
import Stack2Screen from '../screens/Stack2Screen'

const StackNavigator = createStackNavigator(
  {
    Stack1: { screen: Stack1Screen },
    Stack2: { screen: Stack2Screen }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)
