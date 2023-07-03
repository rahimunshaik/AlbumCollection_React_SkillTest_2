import React from 'react';
import List from './ListData';
import Navbar from './Navbar';

const AlbumsList = (props) => {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar page="Add Album" path="/add-album" />

      <div className="albums-list">
        {/* Iterate over the albums array passed as props */}
        {props.albums.map((album) => (
          <List
            album={album} // Pass the current album as a prop to the List component
            key={album.id} // Set a unique key for each List component
            setUpdateAlbum={props.setUpdateAlbum} // Pass the setUpdateAlbum function as a prop
            deleteAlbumFromList={props.deleteAlbumFromList} // Pass the deleteAlbumFromList function as a prop
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList;
