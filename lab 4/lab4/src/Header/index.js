import React, {Component} from 'react'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return ( <div class="container">

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Homework'}
        </Navbar.Brand>
      </Navbar>
            </div>)
    }
}

export default Header