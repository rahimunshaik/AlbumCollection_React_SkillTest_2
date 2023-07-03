import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {

  const getUpdateData = () => {
    // Get the album ID
    const id = props.album.id;

    // Get the updated title and user ID from the input fields
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    // If the title is not provided, use the current title from props
    if (updateTitle === '') {
      updateTitle = props.album.title;
    }

    // If the user ID is not provided, use the current user ID from props
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function with the updated data
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  return (
    <>
      {/* Render the Navbar component with path="/" and page="Home" */}
      <Navbar path="/" page="Home" />

      <div className='update-album'>
        <div className='form-container'>
          {/* Render the current album title */}
          <h4>Title: {props.album.title}</h4>

          <div className='inp-container'>
            {/* Input field for entering a new title */}
            Enter New Title:
            <input type="text" id='title-inp'></input>
          </div>

          {/* Render the current album user ID */}
          <h4>User ID: {props.album.userId}</h4>

          <div className='inp-container'>
            {/* Input field for entering a new user ID */}
            Enter New User ID:
            <input type="number" id='userid-inp'></input>
          </div>

          {/* Link to the home page */}
          <Link to='/'>
            {/* Button to save the updated data */}
            <button type='submit' onClick={getUpdateData}>Save</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
