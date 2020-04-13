import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class HeadSide extends Component {
  
    render() {
      var menuStyle;
      var sidebarStyle;
      var backgroundStyle;
      if(this.props.isMenuOpen === true){
        menuStyle = {top: '63px'};
      }
      if(this.props.isSidebarOpen === true && this.props.isDocked===false){
          sidebarStyle = {width: '50%'}
          backgroundStyle={'background-blend-mode':'darken'}
      }

      return (
        <Router>
          <div className="header">
            <div className="hamburger" onClick={() => {
                if(this.props.isMenuOpen === true){
                    this.props.menuToggle();
                }
                    this.props.sidebarToggle()
                }
                
                }>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div id="headerMenu" >
              <Link  className="headerList" to="/main">Menu</Link>
              <Link  className="headerList" to="/main">Menu</Link>
              <Link  className="headerList" to="/main">Menu</Link>
              <Link  className="headerList" to="/main">Menu</Link>
              <Link  className="headerList" to="/main">Menu</Link>
            </div>
            <div className="hamburger-nav" onClick={() => {
                if(this.props.isSidebarOpen === true){
                    this.props.sidebarToggle();
                }
                this.props.menuToggle()
                
                }}>
              MENU
            </div>
          </div>

          <div className="headerList2" style={menuStyle}>
            <Link  to="/main">Menu</Link>
            <Link  to="/main">Menu</Link>
            <Link  to="/main">Menu</Link>
            <Link  to="/main">Menu</Link>
            <Link  to="/main">Menu</Link>
          </div>
          <nav className="sidebar" id="mySidebar" style={sidebarStyle}>
                <h1><b>Menu</b></h1>
                <ul className="sidebarMenu">
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink>
                    <ul>
                      <li className="sidebarItems-2"><NavLink className="sidebarItems-2" to="/#">subLink</NavLink></li>
                    </ul>
                  </li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                  <li className="sidebarItems-1"><NavLink className="sidebarItems-1" to="/#">Link</NavLink></li>
                </ul>
            </nav>
          
            
        </Router>
      );
    }
  }

export default HeadSide;