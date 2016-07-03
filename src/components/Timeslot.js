import React from 'react';
import Dropdown from './Dropdown';

class Timeslot extends React.Component {

  constructor(props) {
    super(props);
    this.initTimeSlots();
  }

  state = {
    slots: []
  }

  initTimeSlots() {
    const slots = buildSlotsList();
    this.setState({ slots });
  }

  // must return an array of timeslots
  buildSlotsList() {
    let slots = [];
    let time = 1440;
    let interval = 0;

    // acho que nao podes fazer isto... modificar o props.interval
    if (this.props.interval === undefined) {
      interval = 30;
    }

    if (interval > time) {
      // we can not have slots bigger than time
      return;
    }

    time = time / interval;
    Number((time).toFixed(1));

    return slots;
  }

  render() {
    return (
      <Dropdown list={this.state.slots}/>
    );
  }
}

export default Timeslot;
