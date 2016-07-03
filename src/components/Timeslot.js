import React from 'react';

class Timeslot extends React.Component {
  buildSlotlist(props) {
    super(props);
    // let slots = [];
    let time = 1440;
    let slot = props.interval;
    // let hour = 0;
    // let min = 0;
    if (slot === undefined) {
      slot = 30;
    }
    if (slot > time) {
      // we can not have slots bigger than time
      return;
    }
    time = time / slot;
    Number((time).toFixed(1));
  }
}

export default Timeslot;
