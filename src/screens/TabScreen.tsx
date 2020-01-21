import React from 'react'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'
import { Container, Header, Left, Right, Button, Icon, Body, Title, Tab, Tabs } from 'native-base'
import Tab1Screen from './Tab1Screen'
import Tab2Screen from './Tab2Screen'
import Tab3Screen from './Tab3Screen'

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

class TabScreen extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Tab</Title>
          </Body>
          <Right />
        </Header>

        <Tabs>
          <Tab heading="Tab1">
            <Tab1Screen />
          </Tab>
          <Tab heading="Tab2">
            <Tab2Screen />
          </Tab>
          <Tab heading="Tab3">
            <Tab3Screen />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default TabScreen
