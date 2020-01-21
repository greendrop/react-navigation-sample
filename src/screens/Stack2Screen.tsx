import React from 'react'
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

class Stack2Screen extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>Stack2</Title>
          </Body>
          <Right />
        </Header>
        <Content padder />
      </Container>
    )
  }
}

export default Stack2Screen
