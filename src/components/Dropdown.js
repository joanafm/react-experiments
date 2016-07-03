import React from 'react';
import Button from './Button';

class Dropdown extends React.Component {

  static propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    title: React.PropTypes.string,
    message: React.PropTypes.string,
    selected: React.PropTypes.string
  }

  state = {
    isVisible: false
  }

  handleSelection = (item) => {
    this.props.selected = item;
  }

  toggleVisible() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  renderListItems() {
    const items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      const item = this.props.list[i];
      items.push(
        <div onClick={this.handleSelection}>
          <span>{item}</span>
        </div>
      );
    }

    return items;
  }

  render() {
    const defaultOption = this.props.message;
    const placeHolderValue = this.props.list[0];
    return (
      <div>
        <h4>{this.props.title}</h4>
        <div className="dropdown">
          <Button
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            styles="dropdown-toggle"
          >
            {defaultOption}
            <span className="caret"></span>
          </Button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {this.renderListItems()}
          </ul>
        </div>
        <div className="result">
          You selected
          <strong> {placeHolderValue} </strong>
        </div>
      </div>
      /* <div className={'dropdown-container' + (this.state.isVisible ? ' show' : '')}>
        <div
          className={'dropdown-display' + (this.state.isVisible ? ' clicked' : '')}
          onClick={this.toggleVisible}
        >
          <span>{this.props.selected}</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="dropdown-list">
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>*/
    );
  }
}

export default Dropdown;
