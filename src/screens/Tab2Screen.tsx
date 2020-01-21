import React from 'react'
import { Content, H1 } from 'native-base'

class Tab2Screen extends React.Component {
  componentDidMount() {
    console.log('Tab2Screen')
  }

  render() {
    return (
      <Content padder>
        <H1>Tab2</H1>
      </Content>
    )
  }
}

export default Tab2Screen
