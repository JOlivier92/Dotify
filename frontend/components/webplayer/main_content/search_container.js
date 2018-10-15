import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './search';
import { fetchSongsByName } from '../../../actions/song_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    songs: state.entities.songs,
    artists: state.entities.artists,
    albums: state.entities.albums,
  };
};

const mapDispatchToProps = dispatch => ({
  searchSongs: query => dispatch(fetchSongsByName(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search)
