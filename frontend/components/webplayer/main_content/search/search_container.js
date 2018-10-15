import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './search';
import { fetchSongsByName } from '../../../../actions/song_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongsByName: query => dispatch(fetchSongsByName(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search)
