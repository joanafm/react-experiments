import React from 'react';
import Dropdown from './components/Dropdown';

const handleClick = () => {
  console.log('yay');
};

const App = () => (
  <div>
    <img src="./images/time.jpg" alt="banner" />
    <div className="row">
      <div className="col-md-3"></div>
      <div id="chooseDuration" className="col-md-6">
        <Dropdown
          title="Choose the duration of your time slot:"
          message="Duration (min)"
          list={['10', '15', '20', '30', '60']}
          onClick={handleClick}
        />
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
);

export default App;
