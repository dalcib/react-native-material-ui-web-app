import React, { Component } from 'react'
import { View } from 'react-native'
// eslint-disable-next-line
import { NativeModules } from 'react-native'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { ThemeProvider, COLOR } from 'react-native-material-ui'

import Home from './Home'
import ActionButton from './ActionButton/index'
import ActionButtonToolbar from './ActionButton/ActionButtonToolbar.react'
import ActionButtonSpeedDial from './ActionButton/ActionButtonSpeedDial.react'
import Avatar from './Components/Avatar'
import BottomNavigation from './Components/BottomNavigation'
import Badge from './Components/Badge'
import Button from './Components/Button'
import Card from './Components/Card'
import Checkbox from './Components/Checkbox'
import Dialog from './Components/Dialog'
import Drawer from './Components/Drawer'
import IconToggle from './Components/IconToggle'
import List from './Components/List'
import RadioButton from './Components/RadioButton'
import Toolbar from './Components/Toolbars'
import Snackbar from './Components/Snackbar'
import TextInput from './Components/TextInput'

import AppDrawer from './AppDrawer'

const history = createBrowserHistory()

//const UIManager = NativeModules.UIManager

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: false,
      open: false,
    }

    this.toggleOpen = this.toggleOpen.bind(this)
  }
  /* componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  } */

  toggleOpen = ev => {
    this.setState({ open: !this.state.open })
    if (ev) {
      ev.preventDefault()
    }
  }
  render() {
    return (
      <Router history={history}>
        <ThemeProvider uiTheme={uiTheme}>
          <AppDrawer open={this.state.open}>
            <View>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    isOpen={this.state.open}
                    toogleOpen={this.toggleOpen.bind(this)}
                    {...props}
                  />
                )}
              />
              <Route path="/actionButton" component={ActionButton} />
              <Route
                path="/actionButtonToolbar"
                component={ActionButtonToolbar}
              />
              <Route
                path="/actionButtonSpeedDial"
                component={ActionButtonSpeedDial}
              />
              <Route path="/avatar" component={Avatar} />
              <Route path="/badge" component={Badge} />
              <Route path="/bottomNavigation" component={BottomNavigation} />
              <Route path="/button" component={Button} />
              <Route path="/card" component={Card} />
              <Route path="/checkbox" component={Checkbox} />
              <Route path="/dialog" component={Dialog} />
              <Route path="/drawer" component={Drawer} />
              <Route path="/iconToggle" component={IconToggle} />
              <Route path="/list" component={List} />
              <Route path="/radioButton" component={RadioButton} />
              <Route path="/textInput" component={TextInput} />
              <Route path="/toolbar" component={Toolbar} />
              <Route path="/snackbar" component={Snackbar} />
            </View>
          </AppDrawer>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
