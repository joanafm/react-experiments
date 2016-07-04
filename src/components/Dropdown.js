import React from 'react';
import Button from './Button';

class Dropdown extends React.Component {

  static propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    title: React.PropTypes.string,
    message: React.PropTypes.string,
    selected: React.PropTypes.string
  }

  /* state = {
    isVisible: false
  } */

  handleSelection(item) {
    if (!(this.props.message === item)) {
      console.log(`mudar para ${item}`);
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
        <div onClick={() => this.handleSelection(item)} key={i}>{item}</div>
      );
    }

    return items;
  }

  render() {
    const choosenValue = this.props.message;
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
            {choosenValue}
            <span className="caret"></span>
          </Button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {this.renderListItems()}
          </ul>
        </div>
        <div className="result">
          You selected
          <strong> {choosenValue} </strong>
        </div>
      </div>
    );
  }
}

export default Dropdown;
