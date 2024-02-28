import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import './index.css'

import App from './App';

import profileReducer from './store/profile/reducer'

const rootReducers = combineReducers({
    profileStore: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const centralStore = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
)

const app = (
  <Provider store={centralStore}>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
