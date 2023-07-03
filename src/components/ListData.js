import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => {
  return (
    <div className='list'>
      {/* Render the album title */}
      <h3>{props.album.title}</h3>

      <div className='button-group'>
        {/* Link to the "Update Album" page */}
        <Link to="/update-album">
          {/* Button to update the album */}
          <button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>Update</button>
        </Link>

        {/* Button to delete the album */}
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
      </div>
    </div>
  );
};

export default List;