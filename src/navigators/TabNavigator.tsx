import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import TabScreen from '../screens/TabScreen'

const TabNavigator = createStackNavigator(
  {
    Tab: { screen: TabScreen }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(TabNavigator)
