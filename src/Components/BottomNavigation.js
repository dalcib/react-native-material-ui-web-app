import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Container from './Container'

import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui'

const propTypes = {}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
})

class BottomNavigationSpec extends Component {
  constructor(props) {
    super(props)

    this.state = { active: 'today' }
  }

  render() {
    return (
      <Container style={style.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.goBack()}
          centerElement={'Botton navigation'}
        />
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name={this.state.active} size={54} />
        </View>
        <BottomNavigation active={this.state.active}>
          <BottomNavigation.Action
            key="today"
            icon="today"
            label="Today"
            onPress={() => this.setState({ active: 'today' })}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            onPress={() => this.setState({ active: 'bookmark-border' })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>
      </Container>
    )
  }
}

BottomNavigationSpec.propTypes = propTypes

export default BottomNavigationSpec
