import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom"; 
const List = (props) => {
  return (
    <div className='list'>
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        <Link to="/update-album">
          <button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>Update</button>
        </Link>
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
      </div>
    </div>
  );
};

export default List;





















// const albums = [
//     {
//       title: 'Thriller',
//       artist: 'Michael Jackson',
//       image: '/images/thriller.jpg',
//       pdf: '/pdfs/thriller.pdf',
//     },
//     {
//       title: 'The Dark Side of the Moon',
//       artist: 'Pink Floyd',
//       image: '/images/dark_side_of_the_moon.jpg',
//       pdf: '/pdfs/dark_side_of_the_moon.pdf',
//     },
//     {
//       title: 'Abbey Road',
//       artist: 'The Beatles',
//       image: '/images/Abbe.jpg',
//       pdf: '/pdfs/Abbey.pdf',
//     },
//     {
//       title: 'Back in Black',
//       artist: 'AC/DC',
//       image: '/images/Back_in_black.jpg',
//       pdf: '/pdfs/back_in_black.pdf',
//     },
//     {
//       title: 'Rumours',
//       artist: 'Fleetwood Mac',
//       image: '/images/Rumours.jpg',
//       pdf: '/pdfs/Rumours.pdf',
//     },
//     {
//       title: 'Nevermind',
//       artist: 'Nirvana',
//       image: '/images/Nevermind.jpg',
//       pdf: '/pdfs/Nevermind.pdf',
//     },
//     {
//       title: 'The Eminem Show',
//       artist: 'Eminem',
//       image: '/images/Eminem.jpg',
//       pdf: '/pdfs/Eminem.pdf',
//     },
//     {
//       title: '21',
//       artist: 'Adele',
//       image: '/images/Adele.jpg',
//       pdf: '/pdfs/Adele.pdf',
//     },
//     {
//       title: 'Hotel California',
//       artist: 'Eagles',
//       image: '/images/Eagles.jpg',
//       pdf: '/pdfs/Eagles.pdf',
//     },
//     {
//       title: 'Blackstar',
//       artist: 'David Bowie',
//       image: '/images/Blackstar.jpg',
//       pdf: '/pdfs/Blackstar.pdf',
//     },
//   ];
  
//   export default albums;
  