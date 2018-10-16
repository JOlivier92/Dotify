export const fetchPlaylists = () => (
    $.ajax({
    url: 'api/playlists',
    method: 'GET',
  })
);

export const fetchPlaylist = id => (
    $.ajax({
    url: `api/playlists/${id}`,
    method: 'GET',
  })
);

export const createPlaylist = playlist => (
    $.ajax({
    url: 'api/playlists',
    method: 'POST',
    data: { playlist }
  })
);
