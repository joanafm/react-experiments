import React from 'react';
import Dropdown from './Dropdown';

class Timeslot extends React.Component {

  state = {
    slots: []
  }

  componentDidMount() {
    this.initTimeSlots();
  }

  initTimeSlots() {
    const slots = this.buildSlotsList();
    this.setState({ slots });
  }

  // must return an array of timeslots
  buildSlotsList() {
    let slots = [];
    /*let time = 1440;
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
    Number((time).toFixed(1));*/

    slots = ['00:00', '00:30', '01:00', '01:30'];

    return slots;
  }

  render() {
    return (
      <Dropdown
        title="Choose your schedule:"
        message="Time"
        list={this.state.slots}
      />
    );
  }
}

export default Timeslot;
