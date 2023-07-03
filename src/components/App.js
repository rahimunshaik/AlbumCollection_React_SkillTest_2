import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import AddAlbum from './AddAlbum';
import AlbumsList from './AlbumsList';
import UpdateAlbum from './UpdateAlbum';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      updateAlbum: {}
    }
  }

  // this function is called when the app renders for the first time
  componentDidMount = async () => {
    // Fetch albums data from an API endpoint
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => json);
      
    // Update the state with the fetched albums data
    this.setState({
      albums
    })
  }

  // delete album function -------------------------
  // This function takes an album id and deletes the album from the albums list and updates the state
  deleteAlbumFromList = (id) => {
    // Send a DELETE request to the API to delete the album with the given id
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' })

    // Filter out the deleted album from the albums list
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    
    // Update the state with the updated albums list
    alert("Album Deleted successfully");
    this.setState({
      albums: newAlbums,
    })
  }
  
  // update album functions -----------------------------
  // This function takes an album object from the albums list and sets the state for the update album
  setUpdateAlbum = async (album) => {
    this.setState({
      updateAlbum: album
    })
  }

  // This function takes an album id, updateTitle, updateUserid, and oldAlbum, and then updates and sets the state
  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];

    if (id < 100) {
      // If the id is less than 100, send a PUT request to update the album with the given id
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      // If the id is greater than or equal to 100, create a new album object
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      }
    }

    // Update the albums list with the updated album
    albums[index] = updatedAlbum;

    // Set the state with the updated albums list
    this.setState({
      albums: albums
    })

    alert("Update Successfully done")
  }

  // add album function ---------------------------------
  // This function takes a userid and title from input and adds a new album to the bottom of the albums list
  addAlbumToList = (userId, title) => {
    // Send a POST request to the API to add a new album
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);

    // Generate a new id for the new album
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }

    // Add the new album to the albums list
    this.setState({
      albums: [...this.state.albums, album]
    })

    alert("New Album added successfully at the bottom");
  }

  render() {
    return (
      <>
        <Routes>
          {/* Define routes and pass necessary props */}
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbumFromList} />} />
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbumToList} />} />
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbumInList} />} />
        </Routes>
      </>
    )
  }
}
