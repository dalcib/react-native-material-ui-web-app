// eslint-disable-next-line
import * as React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

//ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('root'),
})

registerServiceWorker()
