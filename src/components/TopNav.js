import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  import { Link } from 'react-router-dom'
  import { connect } from 'react-redux'
  import { userLogout } from '../actions/auth.actions'
  import { bindActionCreators } from 'redux'

  class TopNav extends React.Component {
    state = {
      isOpen: false
    }
    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    return (
          <div>
            <Navbar color="primary" dark expand="md">
              <NavbarBrand href="/">ProfileHub</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                  {!this.props.user.name
                  ? (
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <a href="/login" className="nav-link">Login</a>
                      </NavItem>
                      <NavItem>
                        <a href="/signup" className="nav-link">Signup</a>
                      </NavItem>
                    </Nav>
                    )
                  : (
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <a href="/" className="nav-link" onClick={() => this.props.logout()}>Log Out</a>
                      </NavItem>
                    </Nav>
                    )
                  }
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
