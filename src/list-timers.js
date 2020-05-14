import React from 'react'
import {connect} from 'react-redux'
import {selectTimer} from './actions'
import TimerView from './timer-view'
class ListTimer extends React.Component{
    
    render(){
        return(
            <div>
        {this.props.timers.map((timer, i) => <TimerView key={i} timer={timer} index={i} />)}
      </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { timers: state.timers }
  }
  
  const mapDispatchToProps = () => {
    return { selectTimer }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps())(ListTimer)