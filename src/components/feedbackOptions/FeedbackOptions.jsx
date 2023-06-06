import React from 'react';
import { Statistics } from 'components/statistics/Statistics';

class FeedbackOptions extends React.Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    
     incrementGood = () => {
        this.setState({ good: this.state.good + 1 });
      };
      incrementBad = () => {
        this.setState({ bad: this.state.bad + 1 });
      };
       incrementNeutral = () => {
        this.setState({ neutral: this.state.neutral + 1 });
      };
      
    render() {

      return (
        <>
          <button onClick={this.incrementGood}>Good</button>
          <button onClick={this.incrementBad}>Bad</button>
          <button onClick={this.incrementNeutral}>Neutral</button>
          <Statistics 
                state={this.state} 
                total={this.state.good + this.state.bad+ this.state.neutral}
                posFid={(this.state.good/(this.state.good + this.state.bad+ this.state.neutral))*100}
            ></Statistics>
          {/* <p>Total: {this.state.good + this.state.bad+ this.state.neutral}</p> */}
          {/* <p>Positive feedback: {(this.state.good/(this.state.good + this.state.bad+ this.state.neutral))*100} %</p>  */}
        </>
      );
    }
  }




//   const Notification=()=>{
//     return (<>
//         <p>No feedback given</p>
//         </>);
//   };
//   const Sstatistics = ({ state, total, posFid }) => {
    
//     {
//       if (total >= 1) {
//         return (
//           <>
//             <h2>Statistics</h2>
//             <p>good: {state.good}</p>
//             <p>Neutral: {state.neutral}</p>
//             <p>Bad: {state.bad}</p>
//             <p>Total: {total}</p>
//             <p>Positive feedback: {posFid} %</p>
//           </>
//         );
//       } else {
//         return (
//           <>
//             <h2>Statistics</h2>
//             {/* <Notification></Notification> */}
//           </>
//         );
//       }
//     }
    
//   };

//validation with proptypes
// Satistics.propTypes = {
//     color: PropTypes.string.isRequired,
//     mark:  PropTypes.string.isRequired
//   }

export default FeedbackOptions;
