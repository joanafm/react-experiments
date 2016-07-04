import React from 'react';
import Dropdown from './Dropdown';

class Timeslot extends React.Component {

  static propTypes = {
    interval: React.PropTypes.string
  }

  state = {
    slots: [],
    interval: this.props.interval
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
    const interval = parseInt(this.state.interval, 10);
    const slots = ['00:00'];
    let time = 1440;
    let hour = 0;
    let min = 0;
    while (time !== 0) {
      min += interval;
      if (min === 60) {
        if (hour !== 23) {
          hour += 1;
        } else {
          hour = 0;
        }
        min = 0;
      }
      let thisH = hour;
      let thisM = min;
      if (thisH < 10) {
        thisH = `0${hour}`;
      }
      if (thisM < 10) {
        thisM = `0${min}`;
      }
      slots.push(`${thisH}:${thisM}`);
      time -= interval;
    }

    return slots;
  }

  render() {
    return (
      <div id="schedule">
        <h2>Choose your schedule:</h2>
        <Dropdown
          title="Start:"
          message={this.state.slots[0]}
          list={this.state.slots}
        />
        <Dropdown
          title="End:"
          message={this.state.slots[1]}
          list={this.state.slots}
        />
      </div>
    );
  }
}

export default Timeslot;
