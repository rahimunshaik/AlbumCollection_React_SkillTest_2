import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const AddAlbum = (props) => {
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title);
  };

  return (
    <>
      <Navbar path="/" page="Home" />

      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Enter New Album Details</h4>
          <div className="input-container">
            <label htmlFor="aaform-userid-inp">Enter User Id:</label>
            <input id="aaform-userid-inp" type="number" />
          </div>
          <div className="input-container">
            <label htmlFor="aaform-title-inp">Enter Album Title:</label>
            <input id="aaform-title-inp" type="text" />
          </div>
          <div>
            <Link to="/">
              <button onClick={getAlbumFormData}>Add To List</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
