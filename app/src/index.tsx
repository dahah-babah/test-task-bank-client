import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import BankMainPage from './components/app'

ReactDOM.render(<Provider store={store}><BankMainPage /></Provider>,
  document.getElementById('root')
)
