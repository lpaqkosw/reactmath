import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HeadSide from './HeadSide.js';
import './HeadSide.css';

const mql = window.matchMedia(`(min-width: 992px)`);
class App extends Component {
  constructor(props) {
    super(props);
    this.sidebarToggle = this.sidebarToggle.bind(this);
    this.mediaQuery = this.mediaQuery.bind(this);
    this.menuToggle = this.menuToggle.bind(this)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarIsOpen: false,
      menuIsOpen: false
    };
  }

  componentWillMount() {
    mql.addListener(this.mediaQuery);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQuery);
  }

  sidebarToggle(e){
    this.setState({
      sidebarIsOpen: !this.state.sidebarIsOpen
    })
  }

  menuToggle(e){
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  mediaQuery() {
    var isOpen = false;
    if(mql.matches === true){
      isOpen = true
    };
    this.setState({ sidebarDocked: mql.matches, sidebarIsOpen: isOpen});
  }
  
  render(){
    var overlayStyle;
    if((this.state.sidebarIsOpen === true || this.state.menuIsOpen === true) && this.state.sidebarDocked === false){
      overlayStyle={opacity:'0.5'}
  }
    return (
      <div className="App">
        <HeadSide sidebarToggle={this.sidebarToggle} menuToggle={this.menuToggle} isDocked={this.state.sidebarDocked} isSidebarOpen={this.state.sidebarIsOpen} isMenuOpen={this.state.menuIsOpen}/>
        <div id="content-overlay" style={overlayStyle}></div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}
export default App;
