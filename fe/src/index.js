import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import personReducer from './store/reducers/personData'
import appDataReducer from './store/reducers/appData'

import './gridforms.css'
import './styles/css/App.css'

const rootReducer = combineReducers({
  person: personReducer,
  app: appDataReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
