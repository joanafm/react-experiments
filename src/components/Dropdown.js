import React from 'react';
import Button from './Button';
import Timeslot from './Timeslot';

class Dropdown extends React.Component {

  static propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    title: React.PropTypes.string,
    message: React.PropTypes.string,
    selected: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  /* state = {
    isVisible: false
  } */

  state = {
    choosen: ''
  }

  getTimeslot() {
    let time = '';
    if (this.state.choosen !== '') {
      time = <Timeslot interval={this.state.choosen.item} />;
    }
    return time;
  }

  handleSelection(item) {
    this.props.onClick();
    if (this.props.title === 'Choose the duration of your time slot:') {
      this.setState({ choosen: { item } });
    }
  }

  /* toggleVisible() {
    this.setState({ isVisible: !this.state.isVisible });
  }*/

  renderListItems() {
    const items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      const item = this.props.list[i];
      items.push(
        <div ref={item} onClick={() => this.handleSelection(item)} key={i}>{item}</div>
      );
    }

    return items;
  }

  render() {
    const choosenValue = this.props.message;
    return (
      <div id="dropDiv">
        <h3>{this.props.title}</h3>
        <div className="dropdown">
          <Button
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            styles="dropdown-toggle"
          >
            {choosenValue}
            <span className="caret"></span>
          </Button>
          <ul id="ddown" className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {this.renderListItems()}
          </ul>
        </div>
        {this.getTimeslot()}
      </div>
    );
  }
}

export default Dropdown;
