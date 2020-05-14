import React from 'react'
import {formatTime} from './utils'
import {connect} from 'react-redux'
import {toggleTimer} from './actions'

class TimerView extends React.Component{
   
    render(){
        const {index,toggleTimer,timer} = this.props;

        return(
            <div>
            <h2>{timer.name}</h2>
        <h1>{formatTime( timer.time)}</h1>
        <button
            
            onClick={(e) => {
                toggleTimer(index)
            }}>
            
            {timer.isRunning ? "Stop" : "Start"}
        </button>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
  }
  
  // Use the toggleTimer action for this component
  const mapDispatchToProps = () => {
    return { toggleTimer }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps())(TimerView)