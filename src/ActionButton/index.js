import { View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { ListItem, Toolbar } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
const propTypes = {}

class ActionButtonSpec extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.goBack()}
          centerElement={'Actions buttons'}
        />
        <ListItem
          divider
          centerElement="With toolbar transition"
          onPress={() => this.props.history.push('/actionButtonToolbar')}
        />
        <ListItem
          divider
          centerElement="With speed dial transition"
          onPress={() => this.props.history.push('/actionButtonSpeedDial')}
        />
      </View>
    )
  }
}

ActionButtonSpec.propTypes = propTypes

export default ActionButtonSpec
