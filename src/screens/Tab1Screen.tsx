import React from 'react'
import { Content, H1 } from 'native-base'

class Tab1Screen extends React.Component {
  componentDidMount() {
    console.log('Tab1Screen')
  }

  render() {
    return (
      <Content padder>
        <H1>Tab1</H1>
      </Content>
    )
  }
}

export default Tab1Screen
