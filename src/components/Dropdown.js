import React from 'react';

class Dropdown extends React.Component {

  static propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  }

  state = {
    isVisible: false
  }

  // nao tenho a certeza se podes fazer isto de modificar as props...
  // não fui eu que fiz isto, eu estava a tentar perceber o que a pessoa tinha
  // feito para depois modificar para o que eu queria
  //
  // fat arrow faz bind ao this. Assim, em vez disto
  // <div onClick={this.select.bind(null, item)}>
  // podes fazer <div onClick={this.select)}>
  // sim, eu à pouco vi isso e pus aí, mas depois tive medo que estivesse errado e voltei atraz -.-
  // até pq o atom é fixe pq põe os links para corrigir o erro
  select = (item) => {
    this.props.selected = item;
  }

  // muito mais simples substituir estas 2 funções por um toggler
  show() {
    this.setState({ isVisible: true });
    // isto nao se faz em react
    document.addEventListener('click', this.hide);
  }

  hide() {
    this.setState({ isVisible: false });
    // isto nao se faz em react
    document.removeEventListener('click', this.hide);
  }

  toggleVisible() {
    // const isVisible ={} this.state ;
    // this.setState({ !isVisible })
    this.setState({ isVisible: !this.state.isVisible });
  }

  renderListItems() {
    const items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      const item
        = this.props.list[i];
      items.push(<div onClick={this.select}>
          <span style={{ color: item.hex }}>{item.name}</span>
      </div>);
    }
    return items;
  }

  render() {
    return <div className={'dropdown-container' + (this.state.isVisible ? ' show' : '')}>
      <div className={'dropdown-display' + (this.state.isVisible ? ' clicked': '')} onClick={this.show}>
        <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
        <i className="fa fa-angle-down"></i>
      </div>
      <div className="dropdown-list">
      <div>
            {this.renderListItems()}
        </div>
      </div>
    </div>;
  }
}

const colours = [{
  name: 'Red',
  hex: '#F21B1B'
}, {
  name: 'Blue',
  hex: '#1B66F2'
}, {
  name: 'Green',
  hex: '#07BA16'
}];

export default Dropdown;
