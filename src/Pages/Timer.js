import React from 'react';
import FlipNumbers from 'react-flip-numbers';
import "../Styles/Timer.css";

class Timer extends React.Component {
    

    state = {
        days: Math.floor((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
        hours: Math.floor(((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor(((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor(((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) % (1000 * 60)) / 1000)
    }

      componentDidMount() {
        this.timer = setInterval(() => {
          this.setState({
           days: Math.floor((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),   
           hours: Math.floor(((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           mins: Math.floor(((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
           seconds: Math.floor(((new Date('December 24, 2021, 00:01:00').getTime() - new Date().getTime()) % (1000 * 60)) / 1000),
          });
        }, 1000);
      }
     
      componentWillUnmount() {
        clearInterval(this.timer);
      }
      
    render(){     
        return(
       
            <div className="timer">
                {/* <p>I am the timer component! {days}d {hours}h {mins}m {seconds}s</p> */}
                <FlipNumbers
                play
                perspective= '5000px'
                color="White"
                width={120}
                height={120}
                numbers={`${this.state.days}D   ${this.state.hours}H    ${this.state.mins}M   ${this.state.seconds}S`}
              />
            </div>
        )
    }
}

export default Timer
