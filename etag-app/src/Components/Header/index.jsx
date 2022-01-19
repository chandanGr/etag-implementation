import React from "react";
import { Link } from 'react-router-dom'

import './index.scss';

import {links} from './Constants/index';

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContainer__logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/774/774970.png"
          alt="logo"
        />
        <h2 className="headerContainer__title">Demo App</h2>
      </div>
      <ul className="headerContainer__links">
          {
              links.map((link) => {
                return <li className="headerContainer__links__item"><Link to={link.value}>{link.label}</Link></li>;
              })
          }
      </ul>
    </div>
  );
}

export default React.memo(Header);
