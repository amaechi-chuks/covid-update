import * as React from 'react';

import "./LoadingBar.css"


 const LoadingBar =  ({width, percent}) => {
  
    let loading= percent * width;

    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      setValue(percent * width);
    });
    return (
      <div className="progress-div" style={{width: width}}>
           <div style={{width: `${loading}px`}} className="progress"/>
      </div>
    )
}
export default LoadingBar