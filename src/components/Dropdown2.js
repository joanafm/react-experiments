import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

const options = [
  '10 min', '15 min', '20 min', '30 min', '60 min'
];

class FlatArrayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: options[3]
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  render() {
    const defaultOption = this.state.selected;
    const
      placeHolderValue = typeof
      this.state.selected === 'string' ? this.state.selected : this.state.selected.label;

    return (
      <section>
        <h4> Choose the duration of your time slot: </h4>
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle" type="button"
            id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="true"
          >
            {placeHolderValue}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
          </ul>
        </div>
        <Dropdown
          options={options} onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
        <div className="result">
          You selected
          <strong> {placeHolderValue} </strong>
        </div>
      </section>
    );
  }
}

export default FlatArrayExample;
