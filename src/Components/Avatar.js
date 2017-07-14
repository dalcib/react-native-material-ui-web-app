import { View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { Avatar, Subheader, Toolbar } from 'react-native-material-ui/src'
import Container from './Container'

const styles = StyleSheet.create({
  avatarContainer: {
    paddingLeft: 16,
  },
})

const propTypes = {}

class AvatarSpec extends Component {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.goBack()}
          centerElement={'Avatars'}
        />
        <Subheader text="Avatars with text" />
        <View style={styles.avatarContainer}>
          <Avatar text="C" />
        </View>
        <Subheader text="Avatars with icon" />
        <View style={styles.avatarContainer}>
          <Avatar icon="person" />
        </View>
      </Container>
    )
  }
}

AvatarSpec.propTypes = propTypes

export default AvatarSpec
