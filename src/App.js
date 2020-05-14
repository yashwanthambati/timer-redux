import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NewTimer from './components/new-timer'
import ListTimers from './list-timers'
import reducers from './reducers'
import { update } from './actions'
const store  = createStore(reducers)
let lastUpdateTime = Date.now()

setInterval(()=>{
  const now = Date.now()
  const deltatime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltatime))
},50)
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <NewTimer />
          <ListTimers />
        </div>
      </Provider>
    )
  }
}
export default App;
