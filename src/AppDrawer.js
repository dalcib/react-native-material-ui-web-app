import React from 'react'
import Sidebar from 'react-sidebar'
import { Link } from 'react-router-dom'
import Drawer from './Components/Drawer'

import { Text } from 'react-native'
/* eslint-disable */
const mql = window.matchMedia(`(min-width: 800px)`)

class AppDrawer extends React.Component {
  open = true
  constructor(props) {
    super(props)

    this.state = {
      mql: mql,
      docked: props.docked,
      sidebarOpen: props.open,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql: mql, sidebarDocked: mql.matches })
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }
  }

  render() {
    /*     var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen,
    } */

    return (
      <Sidebar
        sidebar={<Drawer />}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        {this.props.children}
      </Sidebar>
    )
  }
}

export default AppDrawer
