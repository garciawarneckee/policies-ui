import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        <ul className="navigation">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/policies">Policies</Link>
          </li>
          <li>
            <Link className="link" to="/clients">Clients</Link>
          </li>
        </ul>
      </nav>
    )
  }
}