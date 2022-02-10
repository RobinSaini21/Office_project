
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/help">
          Help
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
        >
          Security
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/settings"
        >
         Settings
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/helptickets"
        >
         Your help tickets
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/saveandlogout"
        >
         Save and logout
        </Link>
      </Menu>
    );
  }
}

