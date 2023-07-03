import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const AddAlbum = (props) => {
  const getAlbumFormData = () => {
    // Retrieve the user id and title values from the input fields
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    
    // Call the addAlbumToList function from the props and pass the user id and title as arguments
    props.addAlbumToList(Number(userId), title);
  };

  return (
    <>
      {/* Render the Navbar component */}
      <Navbar path="/" page="Home" />

      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Enter New Album Details</h4>
          <div className="input-container">
            <label htmlFor="aaform-userid-inp">Enter User Id:</label>
            {/* Input field for user id */}
            <input id="aaform-userid-inp" type="number" />
          </div>
          <div className="input-container">
            <label htmlFor="aaform-title-inp">Enter Album Title:</label>
            {/* Input field for album title */}
            <input id="aaform-title-inp" type="text" />
          </div>
          <div>
            {/* Link to navigate back to the home page */}
            <Link to="/">
              {/* Button to trigger the getAlbumFormData function */}
              <button onClick={getAlbumFormData}>Add To List</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
