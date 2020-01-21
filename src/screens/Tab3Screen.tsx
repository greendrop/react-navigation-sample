import React from 'react'
import { Content, H1 } from 'native-base'

class Tab3Screen extends React.Component {
  componentDidMount() {
    console.log('Tab3Screen')
  }

  render() {
    return (
      <Content padder>
        <H1>Tab3</H1>
      </Content>
    )
  }
}

export default Tab3Screen
