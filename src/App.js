import React from 'react';
import Button from './components/Button';
import Timeslot from './components/Timeslot';
import Dropdown from './components/Dropdown';

const App = () => (
  <div>
    <Button>Let us start</Button>
    <Dropdown
      title="Choose the duration of your time slot:"
      message="Duration (min)"
      list={['10', '15', '20', '30', '60']}
    />
    <Timeslot />
  </div>
);

export default App;
