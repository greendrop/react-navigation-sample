import React from 'react'
import { Text } from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'
import {
  Container,
  Header,
  Title,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Content
} from 'native-base'

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

class Stack1Screen extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Stack1</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            full
            light
            onPress={() => this.props.navigation.navigate('Stack2')}
          >
            <Text>Stack2</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Stack1Screen
