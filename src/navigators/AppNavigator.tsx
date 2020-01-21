import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerContentComponent from '../components/organisms/DrawerContentComponent'
import StackNavigator from './StackNavigator'
import TabNavigator from './TabNavigator'

const AppNavigator = createDrawerNavigator(
  {
    Stack: { screen: StackNavigator },
    Tab: { screen: TabNavigator }
  },
  {
    contentComponent: props => <DrawerContentComponent {...props} />
  }
)

export default createAppContainer(AppNavigator)
