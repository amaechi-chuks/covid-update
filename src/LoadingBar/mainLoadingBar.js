import React from 'react';
import LoadingBar from './Loadng';

export default class MainBar extends React.Component {
    state = {
      percent: 0
    };
    // updateProgress = (field, val) => {
    //   this.setState({ [field]: val });
    // };
  
    render() {
      return (
        <div className="App">
          <div className="div">
            <LoadingBar width={400} percent={this.state.percent} />
            {/* <button
              onClick={() =>
                this.updateProgress("percent", this.state.percent + 0.1)
              }
            >
              Add 10%
            </button> */}
          </div>
        </div>
      );
    }
  }