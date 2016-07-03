import React from 'react';

class Dropdown extends React.Component {

  static propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
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
    return (
      <div className={'dropdown-container' + (this.state.isVisible ? ' show' : '')}>
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
      </div>
    );
  }
}

export default Dropdown;
