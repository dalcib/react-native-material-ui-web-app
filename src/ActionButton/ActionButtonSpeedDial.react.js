import React, { Component } from 'react'
import Container from '../Components/Container'

import { ActionButton, Toolbar } from 'react-native-material-ui'

const propTypes = {}

class ActionButtonSpec extends Component {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.goBack()}
          centerElement={'Speed dail transition'}
        />
        <ActionButton
          actions={[
            'email',
            { icon: 'phone', label: 'Phone' },
            'sms',
            'favorite',
          ]}
          icon="share"
          transition="speedDial"
        />
      </Container>
    )
  }
}

ActionButtonSpec.propTypes = propTypes

export default ActionButtonSpec
