import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='navbar'>
      {/* Render the "Album Collection" heading and handle click event */}
      <h2 onClick={() => props.handleClick(false)}>
        <span>Album Collection</span>
      </h2>

      {/* Link to the specified path */}
      <Link to={props.path}>
        {/* Render the button with the specified page name */}
        <button>{props.page}</button>
      </Link>
    </div>
  );
};

export default Navbar;
